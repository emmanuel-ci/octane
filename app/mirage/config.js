export default function () {
  this.get('posts/:id', function () {
    return {
      data: {
        attributes: {
          name: "Benfica",
        },
        id: 1,
        type: "post"
      }
    }
  });
  this.get('posts/:id/comments', function () {
    return [
      {
        data: {
          attributes: {
            text: "Benfica",
          },
          id: 1,
          type: "comment"
        }
      }
    ]
  });
}
