/** 
 * CREATIONAL DESIGN PATTERNS
 * ==========================
 * * Module Pattern * 
 * --------------------------
 * -- Simple way to Encapsulate Methods.
 * -- Creates a "Toolbox" of functions to use.
 */
var repo = function () {
    var db = {};
    
    var get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };
    
    var save = function (task) {
        console.log('Saving ' + task.name + ' to the db');
    };

    return {
        get: get,
        save: save
    }
}
module.exports = repo();
