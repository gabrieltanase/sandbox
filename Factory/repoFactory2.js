/** 
 * CREATIONAL DESIGN PATTERNS
 * ==========================
 * * Factory Pattern * 
 * --------------------------
 * -- A pattern used to simplify object creation.
 * -- Creating different objects based on need.
 * -- "Repository" Creation
 */
var repoFactory = function () {
    var repos = this;
    var repoList = [
        { name: 'task', source: './taskRepository'},
        { name: 'user', source: './userRepository'},
        { name: 'project', source: './projectRepository'}
    ];
    
    repoList.forEach(function (repo) {
        repos[repo.name] = require(repo.source);
    });
}

module.exports = new repoFactory;
