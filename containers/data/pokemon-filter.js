/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var PokemonFilter = (function () {
    function PokemonFilter() {
    }
    PokemonFilter.prototype.accepts = function (user, search) {
        return "" + user.pokemon.number === search || user.pokemon.name.toLowerCase().indexOf(search) >= 0;
    };
    return PokemonFilter;
}());
export { PokemonFilter };
//# sourceMappingURL=pokemon-filter.js.map