const moviesList = () => {
    return `<section class="container movies">
      <h4 class="text-center my-3 movieTitles">Title A: TV Shows(10)</h4>
      <ul class="movies-list">
          <li class="row">
              <div class="col-md-4 ">
                  <div class="card my-3">
                      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg" class="card-img-top" alt="movie 1">
                      <div class="card-body">
                          <div class="card-title">
                              <h6>A Teacher</h6>
                              <span>
                                  <i class="fa fa-thumbs-up"></i> &nbsp; 8 Likes
                              </span>
                            </div>
                        <button type="button" class="btn btn-primary commentsModalBtn" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="30124">Comments</button>
                      </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card my-3">
                      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/389/973876.jpg" class="card-img-top" alt="...">
                      <div class="card-body">
                        <div class="card-title">
                          <h6>A Haunting</h6>
                          <span>
                              <i class="fa fa-thumbs-up"></i> &nbsp; 9 Likes
                          </span>
                        </div>
                        <button type="button" class="btn btn-primary commentsModalBtn" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="30124">Comments</button>
                      </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card my-3">
                      <img src="https://static.tvmaze.com/uploads/images/medium_portrait/210/525047.jpg" class="card-img-top" alt="...">
                      <div class="card-body">
                          <div class="card-title">
                              <h6>A Confession</h6>
                              <span>
                                  <i class="fa fa-thumbs-up"></i> &nbsp; 8 Likes
                              </span>
                            </div>
                            <button type="button" class="btn btn-primary commentsModalBtn" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="30124">Comments</button>
                            </div>
                    </div>
              </div>
          </li>
      </ul>
  </section>`;
  };
  
  export default moviesList;
  