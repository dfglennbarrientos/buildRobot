<!-- <template>
  <div>
    <label v-bind:title=" availableBanks[0].NickAccount">{{ availableBanks[0].BankCode }}</label>
    <h1 v-bind:title=" availableBanks[1].NickAccount">{{ availableBanks[1].NickAccount }}</h1>
    <div class="robot-name">{{ selectedRobot.head.description  }}</div>
    <div class="robot-name">{{ availableParts.torsos[selectBodyIndex].description  }}</div>
    <div class="robot-name">{{ availableParts.bases[selectBaseIndex].description  }}</div>
 <span v-if="availableParts.heads[selectHeadIndex].onSale" class="sale">Sale!</span>
  </div>

   <div>
    <button class="add-to-cart"  @click="addToCart">Add to cart</button>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[selectHeadIndex].src" alt="head"/>
        <button class="prev-selector" v-on:click="SelectPrevHead()" >&#9668;</button>
        <button class="next-selector"  v-on:click="SelectNextHead()" >&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[this.selectLeftArmIndex].src" alt="left arm"/>
        <button class="prev-selector" v-on:click="SelectNextLeftArm()" >&#9650;</button>
        <button class="next-selector" v-on:click="SelectPreviousLeftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[this.selectBodyIndex].src" alt="torsos"/>
        <button class="prev-selector" v-on:click="this.SelectNextBody()" >&#9668;</button>
        <button class="next-selector" v-on:click="this.SelectPreviousBody()">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[this.selectRightArmIndex].src" alt="right arm"/>
        <button class="prev-selector" v-on:click="this.SelectNextRightArm()">&#9650;</button>
        <button class="next-selector" v-on:click="this.SelectPrevRightArm()" >&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="availableParts.bases[this.selectBaseIndex].src" alt="base"/>
        <button class="prev-selector" @click="this.SelectPreviousBase()" >&#9668;</button>
        <button class="next-selector" @click="this.SelectNextBase()">&#9658;</button>
      </div>
    </div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot,index) in cart" :key="index">
          <td>{{ robot.head.title }}</td>
          <td>{{ toCurrency( robot.cost) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    import {toCurrency} from "../shared/formatters"; 
    import parts from "../data/parts";
    import banks from "@/data/banks";
    import createdHook from "./created-hook-mixin"; 

function getNextValidIndex(index,length){
  const newIndex =  index+1;
  return  newIndex >length-1?0:newIndex ;
}
function getPreviousValidIndex(index,length){
  const newIndex =  index-1;
  return  newIndex <0 ? length-1 : newIndex ;
}

export default {
    name:'RobotBuilder',
    mixins:[createdHook],
    data(){
      return  {
        availableParts:parts,
        availableBanks:banks,
        selectHeadIndex:0,selectRightArmIndex:0,selectLeftArmIndex:0,
        selectBodyIndex:0,selectBaseIndex:0,
        cart:[],
      };
    },
    computed:{
      selectedRobot(){
        return{
              head:this.availableParts.heads[this.selectHeadIndex],
              leftArm:this.availableParts.arms[this.selectLeftArmIndex],
              rightArm:this.availableParts.arms[this.selectRightArmIndex],
              torso:this.availableParts.torsos[this.selectBodyIndex],
              base:this.availableParts.bases[this.selectBaseIndex],
        };
      },
    },
    methods:{
      toCurrency,
    addToCart(){
     const robot = this.selectedRobot ;
     const cost = this.selectedRobot.head.cost
            +this.selectedRobot.base.cost
            +this.selectedRobot.leftArm.cost
            +this.selectedRobot.rightArm.cost
            +this.selectedRobot.torso.cost;
           this.cart.push({...robot,cost}); 
           console.log(this.cart);
    },
      SelectNextHead(){
        this.selectHeadIndex = getNextValidIndex(this.selectHeadIndex,this.availableParts.heads.length );
        this.showConsole();
      },
      SelectPrevHead(){
        this.selectHeadIndex = getPreviousValidIndex(this.selectHeadIndex,this.availableParts.heads.length );
        this.showConsole();
      },
      SelectNextRightArm(){
        this.selectRightArmIndex = getNextValidIndex(this.selectRightArmIndex,this.availableParts.arms.length );
        this.showConsole();
      },
      SelectPrevRightArm(){
        this.selectRightArmIndex = getPreviousValidIndex(this.selectRightArmIndex,this.availableParts.arms.length );
        this.showConsole();
      },
      SelectNextLeftArm(){
        this.selectLeftArmIndex = getNextValidIndex(this.selectLeftArmIndex,this.availableParts.arms.length );
        this.showConsole();
      },
      SelectPreviousLeftArm(){
        this.selectLeftArmIndex = getPreviousValidIndex(this.selectLeftArmIndex,this.availableParts.arms.length );
        this.showConsole();
      },
      SelectNextBody(){
        this.selectBodyIndex = getNextValidIndex(this.selectBodyIndex,this.availableParts.torsos.length );
        this.showConsole();
      },
      SelectPreviousBody(){
        this.selectBodyIndex = getPreviousValidIndex(this.selectBodyIndex,this.availableParts.torsos.length );
        this.showConsole();
      },
      SelectNextBase(){
        this.selectBaseIndex = getNextValidIndex(this.selectBaseIndex,this.availableParts.bases.length );
        this.showConsole();
      },
      SelectPreviousBase(){
        this.selectBaseIndex = getPreviousValidIndex(this.selectBaseIndex,this.availableParts.bases.length );
        this.showConsole();
      },
      showConsole(){
        // console.log("Head value:"+ this.selectHeadIndex);
      //   console.log("Left hand value:"+ this.selectLeftArmIndex);
       //  console.log("Right hand value:"+ this.selectRightArmIndex);
     //   console.log("Body value:"+ this.selectBodyIndex);
         console.log("Base value:"+ this.selectBaseIndex);
        // console.log("Head body:"+ this.selectHeadIndex);
      },
    },
};
</script>

<style>
.sale {
color: red;
}
.content{
  position: relative;
}
.add-to-cart{
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px
}
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
} 
.part img {
  width:165px;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;    
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}

</style> -->