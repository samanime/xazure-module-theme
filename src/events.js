export default ({ module: { path } }) => ({
  getMenu: async previous => {
    const args = await previous;
    const { menuItems: current = [], name = 'default', req } = args;
    let menuItems;

    switch (name) {
      case 'default':
        menuItems = current.concat([
          { display: 'Home', url: path }
        ]);
        break;
    }

    return Object.assign(args, { menuItems });
  }
});