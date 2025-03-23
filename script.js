function searchSubjects() {
    let input = document.getElementById('subjectSearch').value.toUpperCase();
    let table = document.querySelector('table');
    let tr = table.getElementsByTagName('tr');
  
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
  }
  
  function searchRecords() {
    let input = document.getElementById('studentSearch').value.toUpperCase();
    let table = document.querySelector('table');
    let tr = table.getElementsByTagName('tr');
  
    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            tr[i].style.display = txtValue.toUpperCase().indexOf(input) > -1 ? "" : "none";
        }
    }
  }
  
  document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for contacting us!");
  });
  
  