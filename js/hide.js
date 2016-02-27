// This method allows the hiding and displaying of modules so that the page is kept as short as possible
$(document).ready(function(){
        // Hide/display level 2 projects
        $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="android"){
                    $(".boxLevel2").hide();
                    $(".android").show();
                }
                if($(this).attr("value")=="Se"){
                    $(".boxLevel2").hide();
                    $(".Se").show();
                }
                if($(this).attr("value")=="networks"){
                    $(".boxLevel2").hide();
                    $(".networks").show();
                }
                if($(this).attr("value")=="database"){
                    $(".boxLevel2").hide();
                    $(".database").show();
                }
                if($(this).attr("value")=="java"){
                    $(".boxLevel2").hide();
                    $(".java").show();
                }
                if($(this).attr("value")=="Segp"){
                    $(".boxLevel2").hide();
                    $(".Segp").show();
                }
            });
        }).change();
        
         // Hide/display sideprojects
         $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="ma"){
                    $(".boxSide").hide();
                    $(".ma").show();
                }
                if($(this).attr("value")=="windows"){
                    $(".boxSide").hide();
                    $(".windows").show();
                }
                if($(this).attr("value")=="mh"){
                    $(".boxSide").hide();
                    $(".mh").show();
                }
            });
        }).change();
    });