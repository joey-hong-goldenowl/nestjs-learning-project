import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import CreatePostDto from "./dto/createPost.dto";
import UpdatePostDto from "./dto/updatePost.dto";
import PostsService from "./posts.service";

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}
  
  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Post()
  addPost(@Body() createPostDto: CreatePostDto) {
    const newPostId = this.postsService.createPost(createPostDto)

    if (newPostId !== -1) {
      return {
        success: true
      }
    } else {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const postId = Number(id)

    const updatedIndex = this.postsService.updatePost(postId, updatePostDto)
    if (updatedIndex !== -1) {
      return {
        success: true
      }
    } else {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    const postId = Number(id)

    const deleteIndex = this.postsService.deletePost(postId)
    if (deleteIndex !== -1) {
      return {
        success: true
      }
    } else {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get(':id')
  findPost(@Param('id') id: string) {
    const post = this.postsService.findPost(Number(id))

    if (!!post) {
      return post
    } else {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}