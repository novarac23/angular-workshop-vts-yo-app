angular
  .module('angularWorkshopStarterAppApp')
  .factory('Users', Users);

  function Users() {

      var users = [
      {
        id: 0,
        img: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        basic_info: 'Software engineer with a passion for good products and fitness.',
        name: 'Nikola Novakovic',
        intrests: 'Code, Fitness, Food'
      },
      {
        id: 1,
        img: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
        basic_info: 'Hardware engineer',
        name: 'John Doe',
        intrests: 'Something intresting'
      }];

      return {
        all: getAllUsers,
        add: addUser
        // remove: removeUser
      };

      function getAllUsers() {
        return users;
      };

      function addUser(userInfo) {
        users.push(userInfo);
      };

      // function removeUser(user_id) {
      //   user.splice()
      // };

  }