'use strict';

import MockData from './MockData';

class API {

  getNews() {
    return MockData.getData('news').then((json) => {
      return json.news;
    });
  }
}

export default new API();
