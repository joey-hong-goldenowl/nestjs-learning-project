import { Injectable } from "@nestjs/common";
import CreatePostDto from "./dto/createPost.dto";
import UpdatePostDto from "./dto/updatePost.dto";
import { Post } from "./interface/post.interface";

@Injectable()
export default class PostsService {
  private posts: Post[] = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(createPostDto: CreatePostDto) {
    const lastId = this.posts[this.posts.length - 1]?.id ?? 0
    this.posts.push({
      id: lastId + 1,
      ...createPostDto
    })
    return this.posts[this.posts.length - 1]?.id ?? -1
  }

  updatePost(postId: Number, updatePostDto: UpdatePostDto) {
    const updateIndex = this.posts.findIndex(post => post.id === postId)

    if (updateIndex !== -1) {
      this.posts[updateIndex] = {
        ...this.posts[updateIndex],
        ...updatePostDto,
      }
    }

    return updateIndex
  }

  deletePost(postId: Number) {
    const deleteIndex = this.posts.findIndex(post => post.id === postId)

    if (deleteIndex !== -1) {
      this.posts.splice(deleteIndex, 1)
    }

    return deleteIndex
  }

  findPost(postId: Number) {
    return this.posts.find(post => post.id === postId)
  }
}