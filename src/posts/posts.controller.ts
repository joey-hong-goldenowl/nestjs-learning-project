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
    return this.postsService.createPost(createPostDto)
  }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.updatePost(id, updatePostDto)
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id)
  }

  @Get(':id')
  findPost(@Param('id') id: string) {
    return this.postsService.findPost(id)
  }
}