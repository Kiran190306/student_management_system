document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (confirm('Are you sure you want to delete this student?')) {
                fetch(`/delete/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    location.reload();
                });
            }
        });
    });
});