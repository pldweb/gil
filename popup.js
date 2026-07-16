$(function() {
     if (!window.location.pathname.includes("/blog")) {
        return;
    }
    const { imageUrl, targetUrl } = window.popupConfig;

    const modalHtml = `
        <div class="modal fade" id="imagePreviewModal" tabindex="-1">
            <div class="modal-dialog modal-lg" style="margin-top: 120px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body text-center">
                        <a href="${targetUrl}" target="_blank">
                            <img
                                src="${imageUrl}"
                                class="img-responsive"
                                style="margin:auto;max-height:80vh;cursor:pointer;"
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    $("body").append(modalHtml);
    $("#imagePreviewModal").modal("show");
});
