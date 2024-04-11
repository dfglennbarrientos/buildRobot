<template>
  <div>
    <router-link to="/home"  >go back.</router-link>
    <!-- <div class="robot-name">{{ selectedRobot.head.description  }}</div>
    <div class="robot-name2">{{ availableParts.torsos[selectBodyIndex].description  }}</div>
    <div class="robot-name2">{{ availableParts.bases[selectBaseIndex].description  }}</div>

 <span v-if="availableParts.heads[selectHeadIndex].onSale" class="sale">Sale!</span> -->
 <CollapsibleSection>
  <div class="preview">
    <div class="preview-content">
      <div class="top-row">
        <img :src="selectedRobot.head.src"/>
      </div>
      <div class="middle-row">
        <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
        <img :src="selectedRobot.torso.src"/>
        <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
      </div>
      <div class="bottom-row">
        <img :src="selectedRobot.base.src"/>
      </div>
    </div>
  </div>
</CollapsibleSection>
<!-- <CollapsibleSection> Is working </CollapsibleSection> -->
  </div>
   <div>
    <button class="add-to-cart"  @click="addToCart">Add to cart</button>
    <div class="top-row">
      <!-- we can use a partSelectedHandler function but he used am arrow function instead, I need to investigate more -->
      <PartSelector :parts="availableParts.heads" :position="top"  @partSelected="part=> selectedRobot.head = part" />
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" position="left" @partSelected="part=> selectedRobot.leftArm = part"/>
      <PartSelector :parts="availableParts.torsos" position="center" @partSelected="part=> selectedRobot.torso = part" />
      <PartSelector :parts="availableParts.arms" position="right" @partSelected="part=> selectedRobot.rightArm = part"/>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="part=> selectedRobot.base = part"/>
      <!-- <div class="bottom part">
        <img :src="availableParts.bases[selectBaseIndex].src" alt="base"/>
        <button class="prev-selector" @click="SelectPreviousBase()" >&#9668;</button>
        <button class="next-selector" @click="SelectNextBase()">&#9658;</button>
      </div>  -->
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
    import PartSelector from '@/build/PartSelector.vue'  ;
    import CollapsibleSection from  "../shared/CollapsibleSection";
      // #region LifeCycle
      createdHookMixin.created();
      onMounted( ()=>{ console.log("no soy tan maje"); }  );
      // #endregion LifeCycle
      
      const availableParts=parts;
    //  const  selectHeadIndex=ref(0),selectRightArmIndex=ref(0),selectLeftArmIndex=ref(0), selectBodyIndex=ref(0),selectBaseIndex=ref(0);
      const  cart=  reactive([]);   //[];

     const  selectedRobot = ref ({
             head:{},
             leftArm:{},
             rightArm:{},
             torso:{},
             base:{},
     });


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


.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

</style>