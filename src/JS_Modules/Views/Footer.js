const footer = () => {
  const currentYear = new Date().getFullYear();
  return ` <footer>
  <div class="container">
   <div class="row">
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">About Us</h6>
               <p>We specialize in bringing you the best and trending movies and series</p>
           </div>
       </div>
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">Recent Review</h6>
               <ul>
                   <li><a href="#">Amazing Site</a></li>
                   <li><a href="#">Best Movie platform</a></li>
                   <li><a href="#">Always up to date</a></li>
               </ul>
           </div>
       </div>
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">Help Center</h6>
               <ul>
                   <li><a href="#">+324 000 000 000</a></li>
                   <li><a href="#">help@moviepoint.com</a></li>
               </ul>
           </div>
       </div>
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">Join Us</h6>
               <ul>
                   <li><a href="#">Be part of the future</a></li>
                   <li><a href="#">Movie conference coming soon</a></li>
                   <li><a href="#">Join the premier of Avengers</a></li>
               </ul>
           </div>
       </div>
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">Social Media</h6>
               <ul>
                   <li><a href="#">Facebook</a></li>
                   <li><a href="#">Twitter</a></li>
                   <li><a href="#">Google+</a></li>
                   <li><a href="#">Pinterest</a></li>
               </ul>
           </div>
       </div>
       <div class="col-md-2 col-sm-12">
           <div class="block">
               <h6 class="block-title">Newsletter</h6>
               <form action="#" class="subscribe-form">
                   <input type="text" placeholder="Email Address">
               </form>
           </div>
       </div>
   </div> 
  <div> Copyright ${currentYear} Clinton Mbonu & Ahmed Tawfik | <a href="https://opensource.org/licenses/MIT" target="_blank"> MIT License </a></div>
  </div>
  </footer>`;
};

export default footer;
