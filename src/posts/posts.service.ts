import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';

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
    const newPost = {
      id: uuidv4(),
      ...createPostDto
    }
    this.posts.push(newPost)
    return newPost
  }

  updatePost(postId: string, updatePostDto: UpdatePostDto) {
    const updateIndex = this.posts.findIndex(post => post.id === postId)

    if (updateIndex !== -1) {
      this.posts[updateIndex] = {
        ...this.posts[updateIndex],
        ...updatePostDto,
      }

      return this.posts[updateIndex]
    }

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND)
  }

  deletePost(postId: string) {
    const deleteIndex = this.posts.findIndex(post => post.id === postId)

    if (deleteIndex !== -1) {
      this.posts.splice(deleteIndex, 1)
      return {
        success: true
      }
    }

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND)
  }

  findPost(postId: string) {
    const post = this.posts.find(post => post.id === postId)
    if (!!post) {
      return post
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND)
  }
}