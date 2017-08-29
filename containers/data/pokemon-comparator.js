/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
var PokemonComparator = (function () {
    function PokemonComparator() {
    }
    PokemonComparator.prototype.compare = function (a, b) {
        return a.pokemon.number - b.pokemon.number;
    };
    return PokemonComparator;
}());
export { PokemonComparator };
//# sourceMappingURL=pokemon-comparator.js.map