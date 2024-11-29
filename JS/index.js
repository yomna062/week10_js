var inputSiteName = document.getElementById("siteName");
var inputSiteUrl = document.getElementById("siteUrl");
var tableData = document.getElementById("tableContent");
var readMsg =document.getElementById('readMsg');
// console.log(inputSiteName);
// console.log(inputSiteUrl);
var sitelist ;
if(localStorage.getItem( 'sitelist') != null){
  sitelist= JSON.parse(localStorage.getItem('sitelist'));
  displaySite();
} 
else{
  sitelist = [];
}

//Add site......
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  submit();
  clearInput();
  displaySite(); 
});

function submit() {
 
  var siteInfo = {
    name: inputSiteName.value,
    url: inputSiteUrl.value,
  };
  sitelist.push(siteInfo);
  localStorage.setItem('sitelist', JSON.stringify(sitelist));
  clearInput();
  // console.log(siteInfo.name);
  // console.log(siteInfo.url);
  // console.log(sitelist);

}

//clear
function clearInput() {
  inputSiteName.value = null;
  inputSiteUrl.value = null;
}

//display Site.................
var i ;
function displaySite() {
  container = "";
for( i=0 ; i<sitelist.length ; i++){
    container += 
    ` <tr>
    <td>${i}</td>
    <td>${sitelist[i].name}</td>
    <td>
      <button class="btn btn-visit"><i class="fa-solid fa-eye"></i> <a href="#" class="ms-1">Visit</a></button>
    </td>
    <td>
      <button id="deleteSite" onclick='deleteSite(${i})'  class="btn btn-delete"><i class="fa-solid fa-trash-can"></i> <span class="ms-1">Delete</span>
</button>
    </td>
  </tr>
`; 
}
tableData.innerHTML=container;
}

//delete
function deleteSite(deleteIndex){
  // console.log( deleteIndex); 
  sitelist.splice(deleteIndex,1) 
  // console.log(sitelist);
  localStorage.setItem('sitelist', JSON.stringify(sitelist));
  displaySite();
}


function validateUrl(url) {
  var urlRegex=/^(https?:\/\/)[a-z]{10, 50}/;
  if(urlRegex.test(url.value)){ 
    url.classList.add('is-valid'); 
    url.classList.remove('is-invalid'); 
  }
  else{
    url.classList.remove('is-valid'); 
    url.classList.add('is-invalid'); 
  }
  // console.log(urlRegex.test(url.value));
  
}

function validateName(element){
  var nameRegex=/^[a-z]\w{2,10}\s?\w{3,10}$/;
  console.log(nameRegex.test(element.value));
  if(nameRegex.test(element.value)){ 
    element.classList.add('is-valid'); 
    element.classList.remove('is-invalid'); 
  }
  else{
    element.classList.remove('is-valid'); 
    element.classList.add('is-invalid'); 
  }
  console.log(nameRegex.test(element.value));
  if(nameRegex.test(element.value)==false){
    readMsg.document.innerHTML=`
              <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered ">
            <div class="modal-content p-3">
              <div class="modal-header">
                <div class="modal-title fs-5" id="exampleModalToggleLabel">
                  <div class="circle d-flex">
                    <span class="rounded-circle me-2 bg-orange"></span>
                    <span class="rounded-circle me-2 bg-yellow"></span>
                    <span class="rounded-circle me-2 bg-green"></span>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p class="m-0 pb-2 fw-semibolder fs-5">
                  Site Name or Url is not valid, Please follow the rules below :
                </p>
                <ul class="rules list-unstyled m-0">
                  <li>
                    <i class="fa-regular fa-circle-right p-3 "></i>Site name must
                    contain at least 3 characters
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-right p-3 "></i>Site URL must be
                    a valid one
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    `
  }

//   if(test(element.value)==false){
//     readMsg.document.innerHTML=`
//               <div
//           class="modal fade"
//           id="exampleModalToggle"
//           aria-hidden="true"
//           aria-labelledby="exampleModalToggleLabel"
//           tabindex="-1"
//         >
//           <div class="modal-dialog modal-dialog-centered ">
//             <div class="modal-content p-3">
//               <div class="modal-header">
//                 <div class="modal-title fs-5" id="exampleModalToggleLabel">
//                   <div class="circle d-flex">
//                     <span class="rounded-circle me-2 bg-orange"></span>
//                     <span class="rounded-circle me-2 bg-yellow"></span>
//                     <span class="rounded-circle me-2 bg-green"></span>
//                   </div>
//                 </div>
//                 <button
//                   type="button"
//                   class="btn-close"
//                   data-bs-dismiss="modal"
//                   aria-label="Close"
//                 ></button>
//               </div>
//               <div class="modal-body">
//                 <p class="m-0 pb-2 fw-semibolder fs-5">
//                   Site Name or Url is not valid, Please follow the rules below :
//                 </p>
//                 <ul class="rules list-unstyled m-0">
//                   <li>
//                     <i class="fa-regular fa-circle-right p-3 "></i>Site name must
//                     contain at least 3 characters
//                   </li>
//                   <li>
//                     <i class="fa-regular fa-circle-right p-3 "></i>Site URL must be
//                     a valid one
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//     `
    
  



// }

}




