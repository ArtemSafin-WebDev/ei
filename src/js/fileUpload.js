export default function() {
    const fileElements = Array.from(document.querySelectorAll('.js-file-upload'));

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number > 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number > 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    const fileCardTemplate = (name, size) => `
      
        ${name} ${size}
        <svg width="20" height="20" aria-hidden="true" class="icon-cross">
            <use xlink:href="#trash" />
        </svg>
    `;

    fileElements.forEach(element => {
        const fileLabels = Array.from(element.querySelectorAll('.user__change-form-file-upload-label'));
        const filesList = element.querySelector('.user__change-form-file-upload-files');
        const dropzone = element.querySelector('.user__change-form-file-upload-dropzone');

        const dropzoneInitialText = dropzone.getAttribute('data-upload-text');
        let addedFiles = 0;

        const handleFilesCount = () => {
            if (addedFiles > 0) {
                dropzone.setAttribute('data-upload-text', `Выбрано файлов: ${addedFiles} из ${fileLabels.length}`);
            } else {
                dropzone.setAttribute('data-upload-text', dropzoneInitialText);
            }
        };

        fileLabels.forEach((label, labelIndex) => {
            const input = label.querySelector('input[type="file"]');

            input.addEventListener('change', () => {
                const filename = input.files.length && input.files[0].name;
                const filesize = input.files.length && input.files[0].size;

                const fileElement = document.createElement('div');
                fileElement.className = 'user__change-form-file-upload-file';
                fileElement.innerHTML = fileCardTemplate(filename, returnFileSize(filesize));

                const removeHandler = () => {
                    label.classList.remove('hidden');
                    input.value = null;
                    fileElement.removeEventListener('click', removeHandler);
                    fileElement.remove();
                    addedFiles = addedFiles - 1;
                    handleFilesCount();
                };

                fileElement.addEventListener('click', removeHandler);

                filesList.appendChild(fileElement);

                label.classList.add('hidden');

                addedFiles = addedFiles + 1;

                handleFilesCount()
            });
        });
    });
}
