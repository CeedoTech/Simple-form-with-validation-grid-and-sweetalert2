var go = document.getElementById("submit").addEventListener("click", run);

function run(e) {
  e.preventDefault();

  var name = $("#name").val();
  var state = $("#state").val();
  var age = $("#age").val();

  if (name == "" || state == "" || age == "") {
    Swal.fire("Fields Empty!", "Please check the missing field!!", "warning");
  } else {
    Swal.fire({
      title: "Are you a couple with Kim Sandra?",
      //   text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("All Done!", "Your file has been submitted.", "success");
      }
    });
  }
}
