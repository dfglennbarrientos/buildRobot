<template>
  <div>
    <div class="robot-name">{{ selectedRobot.head.description  }}</div>
    <div class="robot-name2">{{ availableParts.torsos[selectBodyIndex].description  }}</div>
    <div class="robot-name2">{{ availableParts.bases[selectBaseIndex].description  }}</div>

 <span v-if="availableParts.heads[selectHeadIndex].onSale" class="sale">Sale!</span>
 
  </div>

   <div>
    <button class="add-to-cart"  @click="addToCart">Add to cart</button>
    <div class="top-row">
      <div class="top part">
        <img v-bind:src="availableParts.heads[ selectHeadIndex ].src" alt="head"/>
        <button class="prev-selector" v-on:click="SelectPrevHead()" >&#9668;</button>
        <button class="next-selector"  v-on:click="SelectNextHead()" >&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="availableParts.arms[selectLeftArmIndex].src" alt="left arm"/>
        <button class="prev-selector" v-on:click="SelectNextLeftArm()" >&#9650;</button>
        <button class="next-selector" v-on:click="SelectPreviousLeftArm()">&#9660;</button>
      </div>
      <div class="center part">
        <img v-bind:src="availableParts.torsos[selectBodyIndex].src" alt="torsos"/>
        <button class="prev-selector" v-on:click="SelectNextBody()" >&#9668;</button>
        <button class="next-selector" v-on:click="SelectPreviousBody()">&#9658;</button>
      </div>
      <div class="right part">
        <img v-bind:src="availableParts.arms[selectRightArmIndex].src" alt="right arm"/>
        <button class="prev-selector" v-on:click="SelectNextRightArm()">&#9650;</button>
        <button class="next-selector" v-on:click="SelectPrevRightArm()" >&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="availableParts.bases[selectBaseIndex].src" alt="base"/>
        <button class="prev-selector" @click="SelectPreviousBase()" >&#9668;</button>
        <button class="next-selector" @click="SelectNextBase()">&#9658;</button>
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
<script setup>
    import {computed,ref,reactive,onMounted} from "vue";
    import {toCurrency} from "../shared/formatters"; 
    import parts from "../data/parts";
    import createdHookMixin from "./created-hook-mixin";
    
      // #region private functions
      function getNextValidIndex(index,length){
        const newIndex =  index+1;
        return  newIndex >length-1?0:newIndex ;
      }
      function getPreviousValidIndex(index,length){
        const newIndex =  index-1;
        return  newIndex <0 ? length-1 : newIndex ;
      }
      // #endregion private functions
      // #region LifeCycle
      createdHookMixin.created();
      onMounted( ()=>{ console.log("no soy tan maje"); }  );
      // #endregion LifeCycle

      
      const availableParts=parts;
      const  selectHeadIndex=ref(0),selectRightArmIndex=ref(0),selectLeftArmIndex=ref(0), selectBodyIndex=ref(0),selectBaseIndex=ref(0);
      const  cart=  reactive([]);   //[];

     const  selectedRobot = computed( () => ({
             head:availableParts.heads[selectHeadIndex.value],
             leftArm:availableParts.arms[selectLeftArmIndex.value],
             rightArm:availableParts.arms[selectRightArmIndex.value],
             torso:availableParts.torsos[selectBodyIndex.value],
             base:availableParts.bases[selectBaseIndex.value],
       }) );

     const addToCart=()=>{
     const robot = selectedRobot.value ;
     console.log("robot"+robot);

     let cost = robot.head.cost
            +robot.base.cost
            +robot.leftArm.cost
            +robot.rightArm.cost
            +robot.torso.cost;
           cart.push({...robot,cost}); 
           console.log(cart);
    };
    // #region Part selector method
    const  SelectNextHead=()=>{
         console.log('heads up');
         selectHeadIndex.value = getNextValidIndex(selectHeadIndex.value,availableParts.heads.length );
         showConsole();
        };
        const  SelectPrevHead=()=>{
        console.log('heads down');
        selectHeadIndex.value = getPreviousValidIndex(selectHeadIndex.value,availableParts.heads.length );
        showConsole();
      };
      const   SelectNextRightArm=()=>{
        selectRightArmIndex.value = getNextValidIndex(selectRightArmIndex.value,availableParts.arms.length );
        showConsole();
      };
      const  SelectPrevRightArm=()=>{
        selectRightArmIndex.value = getPreviousValidIndex(selectRightArmIndex.value,availableParts.arms.length );
        showConsole();
      };
      const  SelectNextLeftArm=()=>{
        selectLeftArmIndex.value = getNextValidIndex(selectLeftArmIndex.value,availableParts.arms.length );
        showConsole();
      };
      const  SelectPreviousLeftArm=()=>{
        selectLeftArmIndex.value = getPreviousValidIndex(selectLeftArmIndex.value,availableParts.arms.length );
        showConsole();
      };
      const  SelectNextBody=()=>{
        selectBodyIndex.value = getNextValidIndex(selectBodyIndex.value,availableParts.torsos.length );
        showConsole();
      };
      const  SelectPreviousBody=()=>{
        selectBodyIndex.value = getPreviousValidIndex(selectBodyIndex.value,availableParts.torsos.length );
        showConsole();
      };
      const   SelectNextBase=()=>{
        selectBaseIndex.value = getNextValidIndex(selectBaseIndex.value,availableParts.bases.length );
        showConsole();
      };
      const   SelectPreviousBase=()=>{
        selectBaseIndex.value = getPreviousValidIndex(selectBaseIndex.value,availableParts.bases.length );
        showConsole();
      };
      const   showConsole=()=>{
        console.log("showing console...");
         console.log("Head value:"+ selectHeadIndex.value);
      //   console.log("Left hand value:"+ selectLeftArmIndex.value);
       //  console.log("Right hand value:"+ selectRightArmIndex.value);
     //   console.log("Body value:"+ selectBodyIndex.value);
     // console.log("Head body:"+ selectHeadIndex.value);
     //    console.log("Base value:"+ selectBaseIndex.value);
      };
    // #endregion Part selector method

</script>

<style>
.sale {
color: red;
}
.robot-name{
  color: black;
  font-size: large;
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

</style>