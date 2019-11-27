console.log("connected");
function submitFlowDemoForm() {
    $("div.FlowDemo").hide();
    $("div.loading").show();
    var item = {};
    var termsChecked = $("input#AcceptTerms").prop("checked");
    var terms = $("input#AcceptTerms");
    if (termsChecked == true) {
        terms.attr("value", "Yes");
    } else {
        terms.attr("value", "No");
    }
    var mailingChecked = $("input#MailingList").prop("checked");
    var mailing = $("input#MailingList");
    if (mailingChecked == true) {
        mailing.attr("value", "Yes");
    } else {
        mailing.attr("value", "No");
    }
    // SharePoint columns have a field= associated with them
    // Can see it in the url when you edit the column
    // Use this value for the item[]
    item["EventName"] = $("#EventName").val();
    item["Status"] = $("#Status").val();
    item["FirstName"] = $("#FirstName").val();
    item["LastName"] = $("#LastName").val();
    item["Email"] = $("#Email").val();
    item["Phone"] = $("#Phone").val();
    item["JobTitle"] = $("#JobTitle").val();
    item["Organization"] = $("#Organization").val();
    item["StreetAddress"] = $("#StreetAddress").val();
    item["City"] = $("#City").val();
    item["AcceptTerms"] = $("#AcceptTerms").val();
    item["MailingList"] = $("#MailingList").val();
    // Add an item to the list
    pnp.
    sp.web.lists.getByTitle("Form POST to SharePoint").items.add(item).then((data) => {
        $("div.loading").hide();
        $("div.alert").addClass("alert-success");
        $("div.alert").text("You have successfully registered for our webinar! You will be added to the SharePoint list and receive a confirmation email.");
        $("div.alert").show();
    });
}
