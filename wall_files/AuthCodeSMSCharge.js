﻿$(document).ready(function(){$("#ctl00_ContentPlaceHolder1_ddlAuthenticationCodeSource").change(function(){var SelectedAuthCodeType=$(this).val();if(SelectedAuthCodeType=="SMS"){alert("Standard SMS charge will apply if you are enabled for SMS authentication code");}});});