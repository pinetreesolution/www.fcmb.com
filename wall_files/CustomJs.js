
function LoadSurvey(FirstName,LastName,Email,PhoneNumber)
{var url="https://fcmb.satmetrix.com/app/datacollection/datacollection/dynaSurvey.jsp?p=MTYAAAAAAAAAAM70mXw30JhH70wrf3tX0ndxDWkv1xO3Vw93o55Txw0FJCWogC3EmCZJrCZj3tl7DjmO9S489Kpi9TrlyhTLH3ylihfeubYuIr1jabJMfkvib%2Fk55fSJmC7m2QVp0VFfEjNNfMaiiSha80fWb8IGTuKQxKskG0Ai3D%2Fiv8gb7%2BTghqO82NLPBakadpWQ3Eo2MG6%2FTJbF5dPZuc0Gk%2BQsz%2B9BSpKUfStL1oBb0ojwHx6p&id=731208421&peid=FCMB&collectorType=OPTIN&defaultPopupSurveyWidgetLocaleCode=en_US";url="https://fcmb.satmetrix.com/surveyui/?p=MTIAAAAAAAAAAAAAIz2weWX%2FHV5yX2wcNymDRk0yw4zttPMFEdIzo4ow0mrT9%2BdZiuPYsZSyFEnt38D01fBub4ebQs%2BoZd7dcOi6EqlX63C2djZ4N1b9lImcMQ0zYNUA9VQyhnGIBh9c0K5fK4J23x5%2FI9oiLvHyUQ%3D%3D&type=link&selectedLanguage=en_US&first_name="+FirstName+"&last_name="+LastName+"&email="+Email+"&phone="+PhoneNumber
window.open(url,'_blank','location=yes,height=570,width=520,scrollbars=yes,status=yes');window.location.replace("Individual-Banking.aspx")
return true;}
function commaSeparateNumber(val){val=val.toString().replace(/,/g,"");val=val.toString().replace(/[^\0-9]/ig,"");var valSplit=val.split(".");while(/(\d+)(\d{3})/.test(valSplit[0].toString())){valSplit[0]=valSplit[0].toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2");}
if(valSplit.length===2){val=valSplit[0]+"."+valSplit[1];}
else{val=valSplit[0];}
return val;}
function topupValidation()
{var retVal=confirm("I hereby request for this loan under your Salary Plus Top Up scheme");if(retVal==true){document.getElementById("btnAccept").click();}
else{}}
function checkMultiples(val){val=val.toString().replace(/,/g,"");val=val.toString().replace(/[^\0-9]/ig,"");var valSplit=val.split(".");while(/(\d+)(\d{3})/.test(valSplit[0].toString())){valSplit[0]=valSplit[0].toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2");}
if(valSplit.length===2){val=valSplit[0]+"."+valSplit[1];}
else{val=valSplit[0];}
return val;}
function multiplesOf(number){var val=number;return commaSeparateNumber(val);}