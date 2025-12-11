$(document).ready(function () {

    $("#data-input-form").change(function () {
        const x1_val = $("#x-coordinate1").val()
        const y1_val = $("#y-coordinate1").val()
        const x2_val = $("#x-coordinate2").val()
        const y2_val = $("#y-coordinate2").val()
        console.log(x1_val);
        console.log(y1_val);
        console.log(x2_val);
        console.log(y2_val);

        const x1_svg_coord = x1_val
        const y1_svg_coord = 200 - y1_val
        const x2_svg_coord = x2_val
        const y2_svg_coord = 200 - y2_val
        
        const vector1D = $("#vector1").attr("d", "M0 200 L" + x1_svg_coord + " " + y1_svg_coord)
        const vector2D = $("#vector2").attr("d", "M0 200 L" + x2_svg_coord + " " + y2_svg_coord)

    })


})