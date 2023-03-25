import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, Put } from "@nestjs/common";
import CreatePostPipe from "src/pipe/createPost.pipe";
import UpdatePostPipe from "src/pipe/updatePost.pipe";
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
  addPost(@Body(CreatePostPipe) createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto)
  }

  @Put(':id')
  updatePost(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string, @Body(UpdatePostPipe) updatePostDto: UpdatePostDto) {
    return this.postsService.updatePost(id, updatePostDto)
  }

  @Delete(':id')
  deletePost(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.postsService.deletePost(id)
  }

  @Get(':id')
  findPost(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.postsService.findPost(id)
  }
}