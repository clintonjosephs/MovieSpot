const commentsModal = () => `<div class="modal fade comments_modal" tabindex="-1" role="dialog" aria-labelledby="commentsModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
  <div class="modal-content">
   <div clas="modal-header>
    <h5 class="modal-title"></h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   </div>
    <div class="modal-body">
      <div class="row movie-data"> </div>
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
            <form method="post" id="form" class="col-md-8">
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
