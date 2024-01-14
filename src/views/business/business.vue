<template>
  <div class="main_content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="business_content">
            <!-- v-bind:class="{ active: isActive } -->
            <div class="b_filter" id="btn_filter">
              <button class="btn_filter active" @click="filterPosts('ALL')"> ALL </button>
              <button class="btn_filter" @click="filterPosts('Brics Bank')"> BRICS BANK </button>
              <button class="btn_filter" @click="filterPosts('Energy')"> ENERGY </button>
              <button class="btn_filter" @click="filterPosts('Transport')"> TRANSPORT </button>
              <button class="btn_filter" @click="filterPosts('Telecommunication')"> TELECOMMUNICATION </button>
              <button class="btn_filter" @click="filterPosts('Social & Labour Issue')"> SOCIAL AND LABOUR ISSUES </button>
            </div>
            <div v-if="displayedPosts.length">
              <div class="bs_content" v-for="post in displayedPosts">
                <router-link :to="`/postdetails/${post.id}`" type="button">
                  <div class="bs_nlist">
                    <img :src="post.image" class="img-fluid " loading="lazy" alt="">
                    <div>
                      <div class="ex_co date_flag">
                        <div class="d-flex">
                          <h6>{{ post.postDate }} </h6>
                          <img src="../../../frontend/images/flags/russia-26896.svg" class="img-fluid" loading="lazy"
                            alt="">
                        </div>
                      </div>
                      <!-- <p>{{ post.category }}</p> -->
                      <h5>
                        {{ post.title }}
                      </h5>
                      <p>

                        {{ post.description }}
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <div class="text-center" v-if="displayedPosts.length < postData.length">
              <button class="text-center btn mb-2 btn-primary m-auto" @click="loadMore">
                Load More
              </button>
            </div>
            <div v-else>
              <center class="p-4" ><button type="button " class="btn btn-secondary" disabled>No more Data..</button></center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

    <script>
    import jQuery from "jquery";
    const $ = jQuery;
    window.$ = $;
  
    import postData from "../../assets/post.json";

      $(function () {
          $('.btn_filter').click(function () {
            $(".btn_filter").css("transition", ".4s all ease-in-out").removeClass('active');
            $(this).css("transition", ".4s all ease-in-out").addClass('active');
          })
        });
        
    export default {
      data() {
        return {
          postData: [],
          displayedPosts: [],
          itemsToShow: 10,
          currentCategory: 'ALL',
        };
      },
      created() {
        this.postData = postData;
        this.filterPosts('ALL');
      },
      methods: {
        loadMore() {
          this.itemsToShow += 10;
          this.filterPosts(this.currentCategory);
        },
        filterPosts(category) {
          this.currentCategory = category;
          let filteredPosts = [];
  
          if (category === 'ALL') {
            filteredPosts = this.postData.slice().reverse().slice(0, this.itemsToShow);
          } else {
            filteredPosts = this.postData.filter(post => post.category === category).slice().reverse().slice(0, this.itemsToShow);
          }
  
          this.displayedPosts = filteredPosts;
        },
      },
      watch: {
        currentCategory() {
          this.itemsToShow = 10; // Reset items to show when changing category
          this.filterPosts(this.currentCategory);
        },
      },
    };
  </script>
  
<style scoped>
.ex_content ul li {
    margin: 3px 0px;
}
</style>


