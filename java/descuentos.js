 
        var costo = 1500;
        var descuento = 40;
        var adescontr = descuento / 100
        var cien = 1500;
        var descontar = adescontr * cien;
        var total = costo - descontar;
        var edad = 19
      
        if( edad < 21) {
            alert("Puede tener descuento");
            console.log("------------------------------------------")
            console.log("Puede tener descuento");
            console.log( "Precio después del descuento es: ", total)
            console.log("El precio antes del descuento: ", costo)
            console.log("El descuento es de %40")
        } else if ( edad > 21){
            alert("No puede tener descuento");
        } 

        var compra = 1000;
        var porcentaje = 30;
        var oporcetj = porcentaje / 100
        var descuento = oporcetj * compra;
        var total = compra - descuento;
        var edad = 25
       
        if( edad > 21) {
            alert("Puede tener descuento");
            console.log("------------------------------------------")
            console.log("Puede tener descuento");
            console.log( "Precio después del descuento es: ", total)
            console.log("El precio antes del descuento: ", costo)
            console.log("El descuento es de %30")
        } else if ( edad < 21){
            alert("No puede tener descuento");
        } 
        
        var compra = 900;
        var descuento = 10;
        var desconto = descuento / 100;
        var descuentot = desconto * compra;
        var total = compra - descuentot;
        var edad = 27

        if( edad > 21) {
            alert("Puede tener descuento");
            console.log("------------------------------------------")
            console.log("Puede tener descuento");
            console.log( "Precio después del descuento es: ", total)
            console.log("El precio antes del descuento: ", costo)
            console.log("El descuento es de %10")
        } else if ( edad < 21){
            alert("No puede tener descuento");
        }
        
     /* compra mayor o igual a $1,000 y es menor de 21 es 40%
     compra mayor o igual a $1,000 y no es menor de 21 es 30%
     compra menor a $999 y es mayor de 21 años es 10% */