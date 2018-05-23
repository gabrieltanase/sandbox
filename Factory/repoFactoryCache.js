/** 
 * CREATIONAL DESIGN PATTERNS
 * ==========================
 * * Factory Pattern * 
 * --------------------------
 * -- A pattern used to simplify object creation.
 * -- Creating different objects based on need.
 * -- "Repository" Creation
 */
var repoFactory=  function () {
    
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            if (this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo;
            } else {
                this.taskRepo = require('./taskRepository');
                // config --
                return this.taskRepo;
            }
        }

        if (repoType === 'user') {
            var userRepo = require('./userRepository');
            return userRepo;
        }

        if (repoType === 'project') {
            var projectRepo = require('./projectRepository');
            return projectRepo;
        }
    }
}
module.exports = new repoFactory;
