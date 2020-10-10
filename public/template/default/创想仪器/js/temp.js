function upTemp(name){

	var tempIdent=new Array();
	var str_ClassID= new Array();  
	var thisClassType;
	var thisClassID;
	str_ClassID=name.split("|");  
	thisClassID = str_ClassID[1];
	
	if (name.indexOf("|")<=0){thisClassType=name;}else{thisClassType = str_ClassID[0];}
	
	
	tempIdent[0]=MyrootPath + "admin/website/_chk_mainConfig.asp";
	tempIdent[1]=MyrootPath + "admin/root_temp-edit/SuccessWork_show.asp";
	tempIdent[2]=MyrootPath + "admin/root_temp-edit/home_show.asp";
	tempIdent[3]=MyrootPath + "admin/root_temp-edit/SuccessWorkClass_Iframe_action.asp?ID="+thisClassID;
	tempIdent[4]=MyrootPath + "admin/root_temp-edit/_AutoClearCache.asp";
	tempIdent[5]=MyrootPath + "admin/root_temp-edit/article_show.asp";
	tempIdent[6]=MyrootPath + "admin/root_temp-edit/Articleclass_Iframe_action.asp?ID="+thisClassID;
	tempIdent[7]=MyrootPath + "admin/root_temp-edit/links_show.asp";
	tempIdent[8]=MyrootPath + "admin/root_temp-edit/selfinfo_show.asp";
	tempIdent[9]=MyrootPath + "admin/root_temp-edit/searchresult_show.asp";
	tempIdent[10]=MyrootPath + "admin/root_temp-edit/search_show.asp";
	tempIdent[11]=MyrootPath + "admin/root_client_action/message_action_list.asp";
	tempIdent[12]=MyrootPath + "admin/root_client_action/mood_action_list.asp";
	
	
	
	
	
	appName=thisClassType;
	switch (appName)
	   {
	   case "chkWebMainConfig":  var id = 0; break;   
	   case "sucwork":  var id = 1; break;
	   case "index":  var id = 2; break;
	   case "caseClass":  var id = 3; break;
	   case "AutoClearCache":  var id = 4; break;
	   case "articlelist":  var id = 5; break;
	   case "articleclass":  var id = 6; break;
	   case "links":  var id = 7; break;
	   case "selfinfo":  var id = 8; break;
	   case "searchresult": var  id = 9; break;
	   case "search":  var id = 10; break;
	   case "message":  var id = 11; break;
	   case "upMood":  var id = 12; break;
	
	
	
	
			 
	   default: document.write("Error!");
	   }
	   
		if (appName == "upMood" || appName == "message" || appName == "selfinfo"){
			jQuery("body").prepend('<span id="upIframe"></span>'); jQuery("#upIframe").html('<iframe src="'+tempIdent[id]+'" style="display:none"></iframe>');
		}else{		
			jQuery(function () {
				
					jQuery("body").prepend('<span id="upIframe"></span>'); jQuery("#upIframe").html('<iframe src="'+tempIdent[id]+'" style="display:none"></iframe>');
			
				
			});
		}

	   

}


/*
                <form method="post" action="../plugins/fast_contact/?action=message" id="msgForm" target="ms-iframe"  onSubmit="return checkFormContact(this);">

                    <div class="controls">
                      <input type="text" id="FuserName" class="float-label" name="FuserName">
                      <label>您的姓名</label>
                    </div>


                    <div class="controls">
                      <input type="text" id="FEmail" class="float-label" name="FEmail">
                      <label>电话</label>
                    </div>

                    <div class="controls">
                      <textarea name="FContent" class="float-label" id="FContent"></textarea>
                      <label>想说的话</label>
                    </div>

                    <div class="controls">
                      <button type="submit"  class="button button-hover button-border-thin button-size-s button-space-none button-fullwidth button-bg button-bg-primary">发送</button>
                    </div>

                </form>
                <div id="tip" style="padding: .3em 0;color:red;font-size:12px"></div>
                <iframe name="ms-iframe" style="display:none"></iframe>
*/

exp1=/^[\da-zA-Z_]+$/;   /*数字、字母、下划线*/
exp2=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;  /*Email*/
exp3=/^[0-9]*$/; /*纯数字*/
exp4=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; /*IP*/
exp5=/^[0-9-]{1,20}$/; /*手机号*/


function checkFormContact(theForm){	if(theForm.FuserName.value=="" || theForm.FuserName.value=="姓名："){
	

		theForm.FuserName.focus();
		jQuery("#tip").html("<div class=tipsFloatWin>×&nbsp;姓名不能为空！</div>").slideDown(500);
		setTimeout('jQuery("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FContent.value=="" || theForm.FContent.value=="内容："){
		theForm.FContent.focus();
		jQuery("#tip").html("<div class=tipsFloatWin>×&nbsp;内容不能为空！</div>").slideDown(500);
		setTimeout('jQuery("#tip").slideUp(500);',1000);
		return false;
	}
	
	if(theForm.FEmail.value=="" || theForm.FEmail.value=="电话："){
		theForm.FEmail.focus();
		jQuery("#tip").html("<div class=tipsFloatWin>×&nbsp;电话不能为空！</div>").slideDown(500);
		setTimeout('jQuery("#tip").slideUp(500);',1000);
		return false;
	}	
	
	 
	 setTimeout('jQuery("#FuserName,#FContent,#FEmail").val( "" );',1000);
	jQuery("#tip").html("<div class=tipsFloatWin>√&nbsp;发送成功!</div>").slideDown(500);
	return true;		

}