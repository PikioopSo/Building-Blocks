/* 
 * The MIT License
 *
 * Copyright 2017 steve.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */


/* ******************** [plate component library] ******************** */
(function(){
    // Create material mixin
var materials = xtag.mixins.materials = {
    methods:{
        isMateria: function(options){
            class materia {
                constructor(options){
                    this.dimensions = materia.dim();
                };
            }

            dimeia(dimensions){
                return dimensions;
            }

        }
    }  
};

    // Register aluminum plate
var _alum_plate = xtag.register("al-plate", {
    mixins: ["materials"],
    lifecycle:{
        created: function(){
            this.isMateria( {
                id: "aluminum",
                stock: "plate",
                db: true,
                unit: "cm",
                dimensions: { width: "10", height: "10", z: ".5" }
            } );
        }
    }
} );

    // Register aluminum plate
var _alum_disk = xtag.register("al-disk", {
    
} );


})();
