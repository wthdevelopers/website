<template>
  <section class="faqs">
    <h1 class="faq-title">FAQs</h1>
    <div class="faq__container">
      <div class="faq__questions" v-for="(faq, index) in faqs" :key="index">
        <div @click="toggleShow" @mouseover.stop="mouseOver" @mouseout.stop="mouseOut" class="question__container">
          <div v-bind:id="index" class="question" v-html="faq[0]"></div>
          <div class="arrow">
            <Arrow ref="arrow" :arrowColor="arrowMainColor"></Arrow>
          </div>
        </div>
        <div ref="answer" class="answer" v-html="faq[1]">
          {{ faq[1] }}
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Arrow from '@/components/Arrow.vue'

export default {
  components: {
    'Arrow': Arrow
  },
  data:()=> {
    return {
      faqs: {
        // Use the template faq* or else the arrow and hidden answer will not work
        faq1: ['Is this hackathon free?', 'Yes, this hackathon is free. All that we ask of you is for you to come down on the day itself!'],
        faq2: ['Who can join this hackathon?', 'This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the consent and indemnity form which can be found <a href="http://www.bit.ly/wthindemnityv1" target="_blank"> here</a> for your parent’s signature and bring it on the day of the competition.'],
        faq3: ['What does it mean by "Ideas are open to interpretation"?', 'It means that you can decide how you want to argue your stance. An example would be interpreting space as Outer Space (rockets, moon, planets) or Space in an architectural sense (a space we live in).'],
        faq4: ['What is the maximum team size?', '4 members maximum.'],
        faq5: ['What are my transport/parking options for getting to and from the event?', "If you are taking public transport, you can take bus 2 and 24 from Tanah Merah MRT and bus 5 from Simei MRT.<br>If you are driving, you can park in SUTD's basement carpark."],
        faq6: ['What can I bring to the event?', 'Things like your laptops or any materials that you will need to create your prototype. We will provide basics like arduinos and some sensors to prototype your idea with.'],
        faq7: ['How do we handle Intellectual Property (IP)?', 'Please refer to the Terms and Conditions of the Competition with regards to IP. You can download the Terms and Conditions <a href="http://bit.ly/wthtncv2" target="_blank"> here.'],
        faq8: ['What if I dont have any skills with fabrication?', 'No worries! The point of What The Hack is to learn and to use what you have learned to create something. We will be holding several workshops for beginners to learn more about fabrication techniques and how to use the machinery provided during the hackathon!'],
        faq9: ['Can I start ideating before the competition?', 'Yes, you can begin conceptualizing your ideas or planning your approach to the themes before the competition. However only work done on the prototype during the competition itself will be judged.'],
        faq10: ['Where can I find the indemnity form?', 'Participants below the age of 18 will need their parent’s consent to participate in the competition. Thus, they will need to submit the consent and indemnity form signed by their parent/guardian at the registration counter on the day of the competition. For all other participants, we will provide the forms for your signature at the registration counter on the day of the competition itself! You can download the indemnity form from <a href="http://www.bit.ly/wthindemnityv1" target="_blank"> here</a>.'],
        faq11: ["My question can't be found in the the FAQs! Who should I contact?", "For any queries or clarification, please feel free to drop us a email at <a href='mailto:queries@sutdwth.com?Subject='Queries about What The Hack''>queries@sutdwth.com</a>."]
      },
      arrowMainColor: '#ff7bac',
      arrowAltColor: 'white',
      isShowing: false
    }
  },
  methods: {
    mouseOver: function(event) {
      var arrow_id = (event.currentTarget.children[0].id).replace("faq", "") - 1;
      (this.$refs.arrow)[arrow_id].color = this.arrowAltColor;
    },
    mouseOut: function(event) {
      var arrow_id = (event.currentTarget.children[0].id).replace("faq", "") - 1;
      (this.$refs.arrow)[arrow_id].color = this.arrowMainColor;
    },
    toggleShow: function(event) {
      // Get the current component object
      var self = this;
      // Get the answer id 
      var answer_id = (event.currentTarget.children[0].id).replace("faq", "") - 1;
      var arrow = event.currentTarget.children[1];
      var child_class = arrow.classList;
      if(child_class.contains("rotate")) {
        arrow.classList.remove("rotate");
      }
      else {
        arrow.classList.add("rotate");
      }
      setTimeout(function() {
        self.$refs.answer[answer_id].hidden = !self.$refs.answer[answer_id].hidden;
      }, 400);
    }
  },
  mounted: function() {
    var answer_list = this.$refs.answer;
    var arrow_list = document.getElementsByClassName('arrow');
    for(var i = 0; i < answer_list.length; i++) {
      answer_list[i].hidden = true;
    };
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Quicksand:700");
@import url("https://fonts.googleapis.com/css?family=Nunito");

  .faqs {
    width: 100%;
  }


  .faq-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3.5vw;
    text-align: center;
    margin: 0;
    padding: 0;
    color: #ff7bac;
    margin-bottom: 1.2vw;
  }


  .faq__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1.2vw #ffa6c7;
    border-radius: 6vw;
    padding: 4.5vw 1.2vw;
    font-size: 1.8vw;
  }

  .question__container {
    background-color: #fff7f8;
    vertical-align: middle;
    border-radius: 1.5vw;
    margin: 1vw 0;
  }

  .question__container:hover,
  .question__container:active {
    color: white;
    background-color: #ffa6c7;
  }


  .question {
    display: inline-block;
    margin: 1.5vw 2vw;
    width: calc(100% - 12vw);
  }

  .arrow {
    display: inline-block;
    width: 4vw;
    transition: transform 0.5s ease-in-out;
  }

  .arrow svg{
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .answer {
   margin: 1.5vw 2vw;
  }

  .rotate {
    transition: transform 0.5s ease-in-out;
    transform: rotate(180deg);
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    .faqs {
      margin: 0 auto;
      width: 90%;
    }

    .faq-title {
      font-size: 2rem;
      margin: 0.5rem auto;
    }

    .faq__container {
      font-size: 1rem;
      border-radius: 3rem;
      padding: 1.5rem 1rem;
      text-align: left;
      box-shadow: 0 0.8rem #ffa6c7;
    }

    .question__container {
      border-radius: 0.5rem;
      margin: 0.5rem 0;
    }
  }
</style>
