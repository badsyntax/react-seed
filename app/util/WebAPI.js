export default {
  getItems() {
    // This is an example asynchronous API call.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Item 1', 'Item 2', 'Item 3'].map((item, i) => {
          return {
            id: i,
            label: item
          };
        }));
      }, 500);
    });
  }
}
