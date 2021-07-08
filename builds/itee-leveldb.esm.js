console.log('Itee.Database.Level v1.0.2 - EsModule')
import * as LevelUpDriver from 'levelup';
import { TAbstractDatabase } from 'itee-database';

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TLevelDBDatabase extends TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: LevelUpDriver
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        var db = this._driver( './mydb' );

        db.put( 'name', 'LevelUP', function ( err ) {
            if ( err ) {
                this.logger.log( 'Ooops!', err );
                return
            }

            db.get( 'name', function ( err, value ) {
                if ( err ) {
                    this.logger.log( 'Ooops!', err );
                    return
                }

                this.logger.log( 'name=' + value );
            } );
        } );

    }

    init () {
        super.init();

    }

    on ( /*eventName, callback*/ ) {}

}

export { TLevelDBDatabase };
//# sourceMappingURL=itee-leveldb.esm.js.map
