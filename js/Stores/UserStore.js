var UserStore = Reflux.createStore({
  listenables: [UserActions],
  onGetUserData: function() {
    const users = await fetch('http://facehub.net/api/users', {
      headers: {
        'Cookie': 'token=DXB6ssP9FsUqaHAu4Gn8PZ'
      }
    }).then((r)=>r.json());
    console.log(users);
    this.trigger(users);
  };
});
