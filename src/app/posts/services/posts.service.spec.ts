import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('PostsService', () => {
  let service: PostsService = null;
  let httpMock: HttpTestingController = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(PostsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });

  describe('getPosts; ', () => {
    it('should be defined', () => {
      expect(service.getPosts).toEqual(jasmine.any(Function));
    });

    it('should make http request', async () => {
      const response = service.getPosts();
      const server = httpMock.expectOne(environment.postsUrl);

      server.flush([
        {id:'fake-id',body:'fake-body'}
      ]);

      const posts = await response;
      expect(posts.length).toEqual(1);
    });
  });
});
