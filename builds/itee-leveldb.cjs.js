console.log('Itee.Database.Level v1.0.2 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var LevelUpDriver = require('levelup');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var LevelUpDriver__namespace = /*#__PURE__*/_interopNamespace(LevelUpDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TLevelDBDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: LevelUpDriver__namespace
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

exports.TLevelDBDatabase = TLevelDBDatabase;
//# sourceMappingURL=itee-leveldb.cjs.js.map
