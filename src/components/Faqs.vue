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
        faq1: ['What is <b><i>Immersive Realities</i></b>?', 'An umbrella term we use to describe <a href="https://goo.gl/1R61PZ" target="_blank">Extended Realities</a>, while including any other realities you want to define!'],
        faq2: ['Who can join this hackathon?', 'This competition is open to anybody 13 years old and above as at the date of the competition. Anyone below 18 years old will require his/her parent’s consent to participate in the competition. Please print out the <a href="https://goo.gl/1R61PZ" target="_blank">consent and indemnity form</a> for your parent’s signature and bring it on the day of the competition.'],
        faq3: ["I'm below 18. Where can I find the indemnity form?", "Participants below the age of 18 will need their parent’s consent to participate in the competition. Thus, they will need to submit the consent and indemnity form signed by their parent/guardian at the registration counter on the day of the competition. For all other participants, we will provide the forms for your signature at the registration counter on the day of the competition itself! You can download the indemnity form from <a href='https://goo.gl/1R61PZ' target='_blank'> here</a>."],
        faq4: ['Are the themes open to interpretation?', 'Yes, you can decide how you want to define your problem statement. If you are unsure of any ideas, you may approach the organizers for clarification at the hackathon!'],
        faq5: ['What is the maximum team size?', '4 members maximum.'],
        faq6: ['What are my transport/parking options for getting to and from the event?', "If you are taking public transport, you can take bus 2 and 24 from Tanah Merah MRT and bus 5 from Simei MRT.<br>If you are driving, you can park in SUTD's basement carpark."],
        faq7: ['What should I bring to the event?', 'Please bring your computers. We are in the process of securing graphics-ready workstations for development and they should be available at the event! Should you expect to use additional prototyping materials, such as Arduinos, electronics and fabrication materials, do bring your own, or let us know before the event and we might be able to help.'],
        faq8: ['How do we handle Intellectual Property (IP)?', 'Please refer to the Terms and Conditions of the Competition with regards to IP. You can download the Terms and Conditions <a href="http://bit.ly/wth2018tnc" target="_blank"> here.'],
        faq9: ['Is this hackathon free?', 'Yes, this hackathon is completely free. Come down and have fun, you never know what your ideas might turn into!'],
        faq10: ['Can I start ideating before the competition?', 'Yes, you can begin conceptualizing your ideas or planning your approach to the themes before the competition. However only work done on the prototype during the competition itself will be judged.'],
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
        (self.$refs.arrow)[answer_id].color = self.arrowAltColor;
      }
      else {
        arrow.classList.add("rotate");
        (self.$refs.arrow)[answer_id].color = self.arrowAltColor;
      }
      setTimeout(function() {
        self.$refs.answer[answer_id].hidden = !self.$refs.answer[answer_id].hidden;
      }, 100);
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
    font-size: 2.5vw;
    text-align: center;
    padding: 0;
    color: #ff7bac;
    margin: 0 auto;
    margin-bottom: 1.2vw;
    background: white;
    border-radius: 5vw;
    width: 15%;
  }


  .faq__container {
    font-family: 'Nunito', sans-serif;
    background-color: #ffebf1;
    box-shadow: 0 1.2vw #ffa6c7;
    border-radius: 6vw;
    padding: 4.5vw 1.2vw;
    font-size: 1.3vw;
  }

  .question__container {
    background-color: #fff7f8;
    vertical-align: middle;
    border-radius: 1.5vw;
    margin: 1vw 0;
    transition: background-color 0.3s;
  }

  .question__container:hover,
  .question__container:active {
    color: white;
    background-color: #ffa6c7;
  }


  .question {
    display: inline-block;
    margin: 1.5vw 2vw;
    width: calc(100% - 10vw);
  }

  .arrow {
    display: inline-block;
    width: 2vw;
    transition: transform 0.3s ease-in-out;
  }

  .arrow svg{
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }

  .answer {
    font-size: 1vw;
    margin: 1.5vw 2vw;
    border-left: 0.5vw solid #ffa6c7;
    padding-left: 1vw;
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
      margin-bottom: 0.5rem;
      width: 30%;
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

    .answer {
      font-size: 1rem;
      margin: 1.5rem 0.5rem;
      border-left: 0.3rem solid #ffa6c7;
      padding-left: 0.75rem;
    }
  }
  
  @media only screen and (min-device-width:768px) and (max-device-width:800px) {
    .faqs {
      margin: 0 auto;
      width: 90%;
    }

    .faq-title {
      font-size: 3.5rem;
      margin-bottom: 0.5rem;
      width: 30%;
    }

    .faq__container {
      font-size: 2rem;
      border-radius: 4rem;
      padding: 2.5rem 2rem;
      text-align: left;
      box-shadow: 0 1.2rem #ffa6c7;
    }

    .question__container {
      border-radius: 1rem;
      margin: 1rem 0;
    }
  }

</style>
