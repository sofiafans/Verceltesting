document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    const uploadForm = document.getElementById('uploadForm');
    const videoFile = document.getElementById('videoFile');
    const userPoints = document.getElementById('userPoints');
    const userCoins = document.getElementById('userCoins');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const userTable = document.getElementById('userTable');
    const videoTable = document.getElementById('videoTable');

    // Simulate video data
    const videos = [
        { id: 1, src: 'video1.mp4', title: 'Video 1', uploader: 'User1', status: 'Approved' },
        { id: 2, src: 'video2.mp4', title: 'Video 2', uploader: 'User2', status: 'Pending' }
    ];

    // Simulate user data
    const users = [
        { id: 1, username: 'User1', email: 'user1@example.com' },
        { id: 2, username: 'User2', email: 'user2@example.com' }
    ];

    // Display videos
    videos.forEach(video => {
        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.controls = true;
        videoElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            window.open(video.src, '_blank');
        });
        videoContainer.appendChild(videoElement);
    });

    // Display users in admin panel
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><button onclick="deleteUser(${user.id})">Delete</button></td>
        `;
        userTable.appendChild(row);
    });

    // Display videos in admin panel
    videos.forEach(video => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${video.id}</td>
            <td>${video.title}</td>
            <td>${video.uploader}</td>
            <td>${video.status}</td>
            <td><button onclick="deleteVideo(${video.id})">Delete</button></td>
        `;
        videoTable.appendChild(row);
    });

    // Handle video upload
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = videoFile.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('video', file);
            // Simulate API call
            setTimeout(() => {
                alert('Video uploaded successfully for verification.');
                videoFile.value = '';
            }, 1000);
        }
    });

    // Handle signup
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        // Simulate API call
        setTimeout(() => {
            alert('Signup successful!');
            signupForm.reset();
        }, 1000);
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        // Simulate API call
        setTimeout(() => {
            alert('Login successful!');
            loginForm.reset();
        }, 1000);
    });

    // Simulate user points and coins
    userPoints.textContent = '50';
    userCoins.textContent = '100';

    // Withdraw coins function
    window.withdrawCoins = () => {
        alert('Coins withdrawn successfully!');
        userCoins.textContent = '0';
    };

    // Delete user function
    window.deleteUser = (userId) => {
        // Simulate API call
        setTimeout(() => {
            alert('User deleted successfully!');
            const row = userTable.querySelector(`tr td:first-child:contains(${userId})`).parentElement;
            row.remove();
        }, 1000);
    };

    // Delete video function
    window.deleteVideo = (videoId) => {
        // Simulate API call
        setTimeout(() => {
            alert('Video deleted successfully!');
            const row = videoTable.querySelector(`tr td:first-child:contains(${videoId})`).parentElement;
            row.remove();
        }, 1000);
    };

    // Sign in with Google function
    window.signInWithGoogle = () => {
        alert('Sign in with Google functionality is simulated.');
    };
});
