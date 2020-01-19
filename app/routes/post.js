import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  async model() {
    let post = await this.store.findRecord('post', 1);
    return post.comments;
  }
}
