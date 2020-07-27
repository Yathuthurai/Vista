class ArticlePost {
  constructor(
    id,
    avatar,
    owner,
    moment,
    title,
    imgUrl,
    description,
    ownerId,
    referenceLink
  ) {
    this.id = id;
    this.avatar = avatar;
    this.owner = owner;
    this.moment = moment;
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.ownerId = ownerId;
    this.referenceLink = referenceLink;
  }
}

export default ArticlePost;
