const drop = () => {

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(e => {
        fileInputs.forEach(input => {
            input.addEventListener(e, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highLight(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhighLight(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#ededed';
    }

    ['dragenter', 'dragover'].forEach(e => {
        fileInputs.forEach(input => {
            input.addEventListener(e, () => highLight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(e => {
        fileInputs.forEach(input => {
            input.addEventListener(e, () => unhighLight(input), false);
        });
    });

};

export default drop;