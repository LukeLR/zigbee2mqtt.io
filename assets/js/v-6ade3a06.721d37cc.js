"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[33110],{79363:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-6ade3a06",path:"/devices/ZG-204ZL.html",title:"TuYa ZG-204ZL control via MQTT",lang:"en-US",frontmatter:{title:"TuYa ZG-204ZL control via MQTT",description:"Integrate your TuYa ZG-204ZL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-05-07T18:17:42.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Reading and Setting Values",slug:"reading-and-setting-values",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Occupancy (binary)",slug:"occupancy-binary",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Sensitivity (enum)",slug:"sensitivity-enum",children:[]},{level:3,title:"Keep_time (enum)",slug:"keep-time-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZG-204ZL.md",git:{updatedTime:1656709824e3}}},38780:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const a=(0,i(66252).uE)('<h1 id="tuya-zg-204zl" tabindex="-1"><a class="header-anchor" href="#tuya-zg-204zl" aria-hidden="true">#</a> TuYa ZG-204ZL</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZG-204ZL</td></tr><tr><td>Vendor</td><td>TuYa</td></tr><tr><td>Description</td><td>Luminance motion sensor</td></tr><tr><td>Exposes</td><td>occupancy, illuminance, battery, sensitivity, keep_time, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZG-204ZL.jpg" alt="TuYa ZG-204ZL"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To start pairing, press the button (pinhole on the side of the device) using a pin/paperclip for approx. 10 seconds. The led will turn on, then start blinking while the pairing process is in progress.</p><h3 id="reading-and-setting-values" tabindex="-1"><a class="header-anchor" href="#reading-and-setting-values" aria-hidden="true">#</a> Reading and Setting Values</h3><p>As a low power device, the motion sensor isn&#39;t reachable most of the time, but only when active (e.g. because it detected motion). Therefore, requests to read or set values (i.e. <code>sensitivity</code> or <code>keep_time</code>) will only work when the sensor detects motion.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>PIR sensor sensitivity (refresh and update only while active). Value can be found in the published state on the <code>sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum" aria-hidden="true">#</a> Keep_time (enum)</h3><p>PIR keep time in seconds (refresh and update only while active). Value can be found in the published state on the <code>keep_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keep_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>10</code>, <code>30</code>, <code>60</code>, <code>120</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),d={},o=(0,i(83744).Z)(d,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);