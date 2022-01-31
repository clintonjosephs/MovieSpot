const commentsModal = () => `<div class="modal fade comments_modal" tabindex="-1" role="dialog" aria-labelledby="commentsModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
   <div clas="modal-header>
    <h5 class="modal-title"></h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-4">
          <img
            src="https://static.tvmaze.com/uploads/images/medium_portrait/272/681431.jpg"
            alt="movie 1"
            class="modal-img"
          />
          <br />
          <button type="button" class="btn modalBtn">
            Download &nbsp <i class="fa fa-download"></i>
          </button>
        </div>
        <div class="col-md-8 mt-2">
          <h3>A Teacher</h3>
          <div class="row mt-2">
            <div class="col-md-8">
              Genre: <b>Drama, Horror, Mystery </b>
            </div>
            <div class="col-md-4">Year: <b> Unknown </b></div>
          </div>

          <div class="row mt-2">
            <div class="col-md-12">
              Summary:
              <p>
                Mr. D is a story about a charming, under-qualified
                teacher trying to fake his way through a teaching job,
                just like he often fakes his way through life.
              </p>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-8">Language: <b>English </b></div>
            <div class="col-md-4">Rating: <b> 5.1 </b></div>
          </div>

          <div class="row mt-2">
            <div class="col-md-12">Premeired: <b>2012-01-09 </b></div>
          </div>
        </div>
      </div>
      <div class="row mt-2">
       <section class="commentSection">
            <h5>Comments(0)</h5>
            <div class="comments-display">
                <ul class="listComments">
                    <li> <i class="fa fa-calendar">&nbsp</i>2021-12-22 <p> Clinton: Comments</li>
                    <li> <i class="fa fa-calendar">&nbsp</i>2021-12-22 <p> Clinton: Comments</li>
                    <li> <i class="fa fa-calendar">&nbsp</i>2021-12-22 <p> Clinton: kdjsbfjkdsfkjdsfdkjsbfjdklbfljbfjakbdjkbfdjklasbfjdsbfjbafkjabfkjdfjkadbfjgsjfkhdskjfdjksfkdjsfkdjfkagjfkajdkja</li>
                </ul>
            </div>
            <h5>Add a comment</h5>
            <form id="form" class="col-md-8">
                <input type="text" class="form-control mt-2" id="name" placeholder="Your Name" maxlength="200" required>
                <textarea class="form-control mt-2" id="comment" maxlength="500" placeholder="Your Insight" required></textarea>
                <button type="submit" class="modalBtn mt-2" id="addComment"><i class="fa fa-share"></i> Share</button>
            </form>
        </section>
      </div>
    </div>
  </div>
</div>
</div>`;

export default commentsModal;