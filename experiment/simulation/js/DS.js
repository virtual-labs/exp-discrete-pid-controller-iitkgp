


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////



function system(){

            document.getElementById('tfbody').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var J = document.getElementById('J1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
		    var a22=math.divide(math.round(math.multiply(math.divide(-B,J),1000)),1000);
			
			console.log(a22);
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(K,J),1000)),1000);
			console.log(b2);
			
			//document.getElementById('a_22').value = a22;
			//document.getElementById('b_2').value = b2;
			
			//var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			//var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			//var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=a21=b1=c12=d11=0;
			var a12=c11=1;
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b1], [b2]]);
			//var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			//var mD = math.matrix([[d11], [d21]]);
			
			//CSSM=" Continuous State Space Model:\t:";
			//document.getElementById("C_SS_M").innerHTML=CSSM;
			
			document.getElementById('matA').innerHTML = '<span style="font-family:Bodoni MT;font-style:italic;font-size:18px"> A </span> =['+ a11+',\t'+a12+';\t\t'+a21+','+a22+']';
			document.getElementById('matB').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">B </span> =['+ b1+';\t\t'+b2+']';
			document.getElementById('matC').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C </span> =['+ c11+',\t'+c12+']';
			document.getElementById('matD').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">D </span> =['+ d11+']';
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			
			
			
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],1000)),1000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],1000)),1000);
			//var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			//var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			//console.log(EV3);
			//console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			//E3="Eigen Value-3 = " +EV3+ "";
			//E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			
			//document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+']';
			
			/* var ad21=bd1=0;
			var ad11=1;
			var ad12= Ts;
			var ad22_1=math.divide(math.multiply(B,Ts),J);
			var ad22_2=math.add(1,-ad22_1,);
			var ad22=math.divide(math.round(math.multiply(ad22_2,1000)),1000);
			var bd2=math.divide(math.round(math.multiply(math.divide(math.multiply(K,Ts),J),1000)),1000); */
			
			///// for F matrix
			var a1_11 = math.divide(math.round(math.multiply(math.multiply(a11,Ts),10000)),10000);
			var a1_12 = math.divide(math.round(math.multiply(math.multiply(a12,Ts),10000)),10000);
			var a1_21 = math.divide(math.round(math.multiply(math.multiply(a21,Ts),10000)),10000);
			var a1_22 = math.divide(math.round(math.multiply(math.multiply(a22,Ts),10000)),10000);
			
			var a2_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.5,Ts,Ts),10000)),10000);
			var a2_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.5,Ts,Ts),10000)),10000);
			
			var a3_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a11),math.multiply(a2_12,a21)),0.3333,Ts),10000)),10000);
			var a3_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a12),math.multiply(a2_12,a22)),0.3333,Ts),10000)),10000);
			var a3_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a11),math.multiply(a2_22,a21)),0.3333,Ts),10000)),10000);
			var a3_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a12),math.multiply(a2_22,a22)),0.3333,Ts),10000)),10000);
			
			var a4_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a11),math.multiply(a3_12,a21)),0.25,Ts),10000)),10000);
			var a4_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a12),math.multiply(a3_12,a22)),0.25,Ts),10000)),10000);
			var a4_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a11),math.multiply(a3_22,a21)),0.25,Ts),10000)),10000);
			var a4_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a12),math.multiply(a3_22,a22)),0.25,Ts),10000)),10000);
			
			var a5_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a11),math.multiply(a4_12,a21)),0.2,Ts),10000)),10000);
			var a5_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a12),math.multiply(a4_12,a22)),0.2,Ts),10000)),10000);
			var a5_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a11),math.multiply(a4_22,a21)),0.2,Ts),10000)),10000);
			var a5_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a12),math.multiply(a4_22,a22)),0.2,Ts),10000)),10000);
			
			var a6_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a11),math.multiply(a5_12,a21)),0.1667,Ts),10000)),10000);
			var a6_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a12),math.multiply(a5_12,a22)),0.1667,Ts),10000)),10000);
			var a6_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a11),math.multiply(a5_22,a21)),0.1667,Ts),10000)),10000);
			var a6_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a12),math.multiply(a5_22,a22)),0.1667,Ts),10000)),10000);
			
			
			var ad11 = math.divide(math.round(math.multiply(math.add(1,a1_11,a2_11,a3_11,a4_11,a5_11,a6_11),10000)),10000);
			var ad12 = math.divide(math.round(math.multiply(math.add(a1_12,a2_12,a3_12,a4_12,a5_12,a6_12),10000)),10000);
			var ad21 = math.divide(math.round(math.multiply(math.add(a1_21,a2_21,a3_21,a4_21,a5_21,a6_21),10000)),10000);
			var ad22 = math.divide(math.round(math.multiply(math.add(1,a1_22,a2_22,a3_22,a4_22,a5_22,a6_22),10000)),10000);
			
			///// for g matrix
			
			var a1_11b = math.divide(math.round(math.multiply(math.multiply(a11,Ts,0.5),10000)),10000);
			var a1_12b = math.divide(math.round(math.multiply(math.multiply(a12,Ts,0.5),10000)),10000);
			var a1_21b = math.divide(math.round(math.multiply(math.multiply(a21,Ts,0.5),10000)),10000);
			var a1_22b = math.divide(math.round(math.multiply(math.multiply(a22,Ts,0.5),10000)),10000);
			
			var a2_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.1667,Ts,Ts),10000)),10000);
			var a2_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.1667,Ts,Ts),10000)),10000);
			
			var a3_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a11),math.multiply(a2_12b,a21)),0.25,Ts),10000)),10000);
			var a3_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a12),math.multiply(a2_12b,a22)),0.25,Ts),10000)),10000);
			var a3_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a11),math.multiply(a2_22b,a21)),0.25,Ts),10000)),10000);
			var a3_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a12),math.multiply(a2_22b,a22)),0.25,Ts),10000)),10000);
			
			var a4_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a11),math.multiply(a3_12b,a21)),0.2,Ts),10000)),10000);
			var a4_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a12),math.multiply(a3_12b,a22)),0.2,Ts),10000)),10000);
			var a4_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a11),math.multiply(a3_22b,a21)),0.2,Ts),10000)),10000);
			var a4_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a12),math.multiply(a3_22b,a22)),0.2,Ts),10000)),10000);
			
			var a5_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a11),math.multiply(a4_12b,a21)),0.1667,Ts),10000)),10000);
			var a5_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a12),math.multiply(a4_12b,a22)),0.1667,Ts),10000)),10000);
			var a5_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a11),math.multiply(a4_22b,a21)),0.1667,Ts),10000)),10000);
			var a5_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a12),math.multiply(a4_22b,a22)),0.1667,Ts),10000)),10000);
			
			var a6_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a11),math.multiply(a5_12b,a21)),0.1428,Ts),10000)),10000);
			var a6_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a12),math.multiply(a5_12b,a22)),0.1428,Ts),10000)),10000);
			var a6_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a11),math.multiply(a5_22b,a21)),0.1428,Ts),10000)),10000);
			var a6_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a12),math.multiply(a5_22b,a22)),0.1428,Ts),10000)),10000);
			
			var ad11b = math.divide(math.round(math.multiply(math.add(1,a1_11b,a2_11b,a3_11b,a4_11b,a5_11b,a6_11b),10000)),10000);
			var ad12b = math.divide(math.round(math.multiply(math.add(a1_12b,a2_12b,a3_12b,a4_12b,a5_12b,a6_12b),10000)),10000);
			var ad21b = math.divide(math.round(math.multiply(math.add(a1_21b,a2_21b,a3_21b,a4_21b,a5_21b,a6_21b),10000)),10000);
			var ad22b = math.divide(math.round(math.multiply(math.add(1,a1_22b,a2_22b,a3_22b,a4_22b,a5_22b,a6_22b),10000)),10000);
			
			var bd1 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b1,Ts),math.multiply(ad12b,b2,Ts)),10000)),10000);
			//var bd12 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b12,Ts),math.multiply(ad12b,b22,Ts)),10000)),10000);
			var bd2 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b1,Ts),math.multiply(ad22b,b2,Ts)),10000)),10000);
			//var bd22 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b12,Ts),math.multiply(ad22b,b22,Ts)),10000)),10000);
			
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd1], [bd2]]);
			
			//DSSM=" Discrete State Space Model:\t:";
			//document.getElementById("D_SS_M").innerHTML=DSSM;
			
			document.getElementById('matAd').innerHTML = '<span style="font-family:Bodoni MT;font-style:italic;font-size:18px"> F </span>=['+ ad11+',\t'+ad12+';\t\t'+ad21+','+ad22+']';
			document.getElementById('matBd').innerHTML = '<span style="font-family:Calibri;font-style:italic;font-size:18px"> g </span>=['+ bd1+';\t\t'+bd2+']';
			//document.getElementById('matCd').innerHTML = ' C =['+ c11+',\t'+c12+']';
			//document.getElementById('matDd').innerHTML = ' D =['+ d11+']';
			
			
			document.getElementById("run11").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
function AddingIS(){
	document.getElementById('tfbody1').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			var J = document.getElementById('J1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
						
		    var a22=math.divide(math.round(math.multiply(math.divide(-B,J),1000)),1000);
						
			var b2=math.divide(math.round(math.multiply(math.divide(K,J),1000)),1000);
			
						
			var a11=a21=b1=c12=d11=0;
			var a12=c11=1;
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b1], [b2]]);
					
							
			
			/* var ad11=ad33=1;
			var ad12= Ts; 
			
			var ad13=ad21=ad23=ad32=bd1=bd3=0;
			var ad31=-Ts;
			
			var ad22_1=math.divide(math.multiply(B,Ts),J);
			var ad22_2=math.add(1,-ad22_1,);
			var ad22=math.divide(math.round(math.multiply(ad22_2,1000)),1000);
			var bd2=math.divide(math.round(math.multiply(math.divide(math.multiply(K,Ts),J),1000)),1000); */
			
			///// for F matrix
			var a1_11 = math.divide(math.round(math.multiply(math.multiply(a11,Ts),10000)),10000);
			var a1_12 = math.divide(math.round(math.multiply(math.multiply(a12,Ts),10000)),10000);
			var a1_21 = math.divide(math.round(math.multiply(math.multiply(a21,Ts),10000)),10000);
			var a1_22 = math.divide(math.round(math.multiply(math.multiply(a22,Ts),10000)),10000);
			
			var a2_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.5,Ts,Ts),10000)),10000);
			var a2_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.5,Ts,Ts),10000)),10000);
			
			var a3_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a11),math.multiply(a2_12,a21)),0.3333,Ts),10000)),10000);
			var a3_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a12),math.multiply(a2_12,a22)),0.3333,Ts),10000)),10000);
			var a3_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a11),math.multiply(a2_22,a21)),0.3333,Ts),10000)),10000);
			var a3_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a12),math.multiply(a2_22,a22)),0.3333,Ts),10000)),10000);
			
			var a4_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a11),math.multiply(a3_12,a21)),0.25,Ts),10000)),10000);
			var a4_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a12),math.multiply(a3_12,a22)),0.25,Ts),10000)),10000);
			var a4_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a11),math.multiply(a3_22,a21)),0.25,Ts),10000)),10000);
			var a4_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a12),math.multiply(a3_22,a22)),0.25,Ts),10000)),10000);
			
			var a5_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a11),math.multiply(a4_12,a21)),0.2,Ts),10000)),10000);
			var a5_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a12),math.multiply(a4_12,a22)),0.2,Ts),10000)),10000);
			var a5_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a11),math.multiply(a4_22,a21)),0.2,Ts),10000)),10000);
			var a5_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a12),math.multiply(a4_22,a22)),0.2,Ts),10000)),10000);
			
			var a6_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a11),math.multiply(a5_12,a21)),0.1667,Ts),10000)),10000);
			var a6_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a12),math.multiply(a5_12,a22)),0.1667,Ts),10000)),10000);
			var a6_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a11),math.multiply(a5_22,a21)),0.1667,Ts),10000)),10000);
			var a6_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a12),math.multiply(a5_22,a22)),0.1667,Ts),10000)),10000);
			
			
			var ad11 = math.divide(math.round(math.multiply(math.add(1,a1_11,a2_11,a3_11,a4_11,a5_11,a6_11),10000)),10000);
			var ad12 = math.divide(math.round(math.multiply(math.add(a1_12,a2_12,a3_12,a4_12,a5_12,a6_12),10000)),10000);
			var ad21 = math.divide(math.round(math.multiply(math.add(a1_21,a2_21,a3_21,a4_21,a5_21,a6_21),10000)),10000);
			var ad22 = math.divide(math.round(math.multiply(math.add(1,a1_22,a2_22,a3_22,a4_22,a5_22,a6_22),10000)),10000);
			
			///// for g matrix
			
			var a1_11b = math.divide(math.round(math.multiply(math.multiply(a11,Ts,0.5),10000)),10000);
			var a1_12b = math.divide(math.round(math.multiply(math.multiply(a12,Ts,0.5),10000)),10000);
			var a1_21b = math.divide(math.round(math.multiply(math.multiply(a21,Ts,0.5),10000)),10000);
			var a1_22b = math.divide(math.round(math.multiply(math.multiply(a22,Ts,0.5),10000)),10000);
			
			var a2_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.1667,Ts,Ts),10000)),10000);
			var a2_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.1667,Ts,Ts),10000)),10000);
			
			var a3_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a11),math.multiply(a2_12b,a21)),0.25,Ts),10000)),10000);
			var a3_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a12),math.multiply(a2_12b,a22)),0.25,Ts),10000)),10000);
			var a3_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a11),math.multiply(a2_22b,a21)),0.25,Ts),10000)),10000);
			var a3_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a12),math.multiply(a2_22b,a22)),0.25,Ts),10000)),10000);
			
			var a4_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a11),math.multiply(a3_12b,a21)),0.2,Ts),10000)),10000);
			var a4_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a12),math.multiply(a3_12b,a22)),0.2,Ts),10000)),10000);
			var a4_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a11),math.multiply(a3_22b,a21)),0.2,Ts),10000)),10000);
			var a4_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a12),math.multiply(a3_22b,a22)),0.2,Ts),10000)),10000);
			
			var a5_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a11),math.multiply(a4_12b,a21)),0.1667,Ts),10000)),10000);
			var a5_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a12),math.multiply(a4_12b,a22)),0.1667,Ts),10000)),10000);
			var a5_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a11),math.multiply(a4_22b,a21)),0.1667,Ts),10000)),10000);
			var a5_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a12),math.multiply(a4_22b,a22)),0.1667,Ts),10000)),10000);
			
			var a6_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a11),math.multiply(a5_12b,a21)),0.1428,Ts),10000)),10000);
			var a6_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a12),math.multiply(a5_12b,a22)),0.1428,Ts),10000)),10000);
			var a6_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a11),math.multiply(a5_22b,a21)),0.1428,Ts),10000)),10000);
			var a6_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a12),math.multiply(a5_22b,a22)),0.1428,Ts),10000)),10000);
			
			var ad11b = math.divide(math.round(math.multiply(math.add(1,a1_11b,a2_11b,a3_11b,a4_11b,a5_11b,a6_11b),10000)),10000);
			var ad12b = math.divide(math.round(math.multiply(math.add(a1_12b,a2_12b,a3_12b,a4_12b,a5_12b,a6_12b),10000)),10000);
			var ad21b = math.divide(math.round(math.multiply(math.add(a1_21b,a2_21b,a3_21b,a4_21b,a5_21b,a6_21b),10000)),10000);
			var ad22b = math.divide(math.round(math.multiply(math.add(1,a1_22b,a2_22b,a3_22b,a4_22b,a5_22b,a6_22b),10000)),10000);
			
			var bd1 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b1,Ts),math.multiply(ad12b,b2,Ts)),10000)),10000);
			//var bd12 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b12,Ts),math.multiply(ad12b,b22,Ts)),10000)),10000);
			var bd2 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b1,Ts),math.multiply(ad22b,b2,Ts)),10000)),10000);
			//var bd22 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b12,Ts),math.multiply(ad22b,b22,Ts)),10000)),10000);
			
			var ad13=ad23=ad32=bd3=0;
			var ad31=-Ts;
			var ad33=1;
			
			var mF = math.matrix([[ad11, ad12, ad13], [ad21, ad22, ad23],[ad31, ad32,ad33]]);
			var mg = math.matrix([[bd1], [bd2],[bd3]]);
			
			document.getElementById('matAad').innerHTML = '<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F<sub>a</sub></span> = ['+ ad11+',\t'+ad12+',\t'+ad13+';\t\t'+ad21+','+ad22+',\t'+ad23+';\t\t'+ad31+','+ad32+',\t'+ad33+']';
			document.getElementById('matBad').innerHTML = '<span style="font-family:calibri;font-style:italic;font-size:18px">g<sub>a</sub></span> = ['+ bd1+';\t\t'+bd2+';\t\t'+bd3+']';
            
			
			document.getElementById("run1").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
}
function EP(){
	document.getElementById('tfbody11').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			var P3 = document.getElementById('np3').value;
           // var P4 = document.getElementById('np4').value;
			
			DP1="Desired Pole 1 = " +P1+ "";
			DP2="Desired Pole 2 = " +P2+ "";
			DP3="Desired Pole 3 = " +P3+ "";
			//DP4="Desired Pole 4 = " +P4+ "";
			
			//document.getElementById("run2").style.display="block";			
			document.getElementById('db1').style.display="block";
			
			/*document.getElementById("Pole_Value1").innerHTML=DP1;
			document.getElementById("Pole_Value2").innerHTML=DP2;
			document.getElementById("Pole_Value3").innerHTML=DP3;
			document.getElementById("Pole_Value4").innerHTML=DP4;*/
			
			
			
			
}

////////////////////
    var Cntrl_Test1;
	var Cntrl_Test2;
	var Cntrl_Test3;
	
function CNTR(){

	
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	 
	 var J = document.getElementById('J1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
			
			var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			var P3 = document.getElementById('np3').value;
           
		   var Zp1 = math.pow(math.e,math.multiply(Ts,P1));
		   var Zp2 = math.pow(math.e,math.multiply(Ts,P2));
		   var Zp3 = math.pow(math.e,math.multiply(Ts,P3));
		   
			var p1=Zp1;
			var p2=Zp2;
			var p3=Zp3;
			
						
						
		    var a22=math.divide(math.round(math.multiply(math.divide(-B,J),1000)),1000);
						
			var b2=math.divide(math.round(math.multiply(math.divide(K,J),1000)),1000);
			
						
			var a11=a21=b1=c12=c13=d11=0;
			var a12=c11=1;
			
			
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b1], [b2]]);
			var mC = math.matrix([[c11], [c12], [c13]]);		
							
			
			/* var ad11=ad33=1;
			var ad12= Ts; 
			
			var ad13=ad21=ad23=ad32=bd1=bd3=0;
			var ad31=-Ts;
			
			var ad22_1=math.divide(math.multiply(B,Ts),J);
			var ad22_2=math.add(1,-ad22_1,);
			var ad22=math.divide(math.round(math.multiply(ad22_2,1000)),1000);
			var bd2=math.divide(math.round(math.multiply(math.divide(math.multiply(K,Ts),J),1000)),1000);
			
			var mF = math.matrix([[ad11, ad12, ad13], [ad21, ad22, ad23],[ad31, ad32,ad33]]);
			var mg = math.matrix([[bd1], [bd2],[bd3]]); */
			
			///// for F matrix
			var a1_11 = math.divide(math.round(math.multiply(math.multiply(a11,Ts),10000)),10000);
			var a1_12 = math.divide(math.round(math.multiply(math.multiply(a12,Ts),10000)),10000);
			var a1_21 = math.divide(math.round(math.multiply(math.multiply(a21,Ts),10000)),10000);
			var a1_22 = math.divide(math.round(math.multiply(math.multiply(a22,Ts),10000)),10000);
			
			var a2_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.5,Ts,Ts),10000)),10000);
			var a2_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.5,Ts,Ts),10000)),10000);
			var a2_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.5,Ts,Ts),10000)),10000);
			
			var a3_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a11),math.multiply(a2_12,a21)),0.3333,Ts),10000)),10000);
			var a3_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11,a12),math.multiply(a2_12,a22)),0.3333,Ts),10000)),10000);
			var a3_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a11),math.multiply(a2_22,a21)),0.3333,Ts),10000)),10000);
			var a3_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21,a12),math.multiply(a2_22,a22)),0.3333,Ts),10000)),10000);
			
			var a4_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a11),math.multiply(a3_12,a21)),0.25,Ts),10000)),10000);
			var a4_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11,a12),math.multiply(a3_12,a22)),0.25,Ts),10000)),10000);
			var a4_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a11),math.multiply(a3_22,a21)),0.25,Ts),10000)),10000);
			var a4_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21,a12),math.multiply(a3_22,a22)),0.25,Ts),10000)),10000);
			
			var a5_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a11),math.multiply(a4_12,a21)),0.2,Ts),10000)),10000);
			var a5_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11,a12),math.multiply(a4_12,a22)),0.2,Ts),10000)),10000);
			var a5_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a11),math.multiply(a4_22,a21)),0.2,Ts),10000)),10000);
			var a5_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21,a12),math.multiply(a4_22,a22)),0.2,Ts),10000)),10000);
			
			var a6_11 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a11),math.multiply(a5_12,a21)),0.1667,Ts),10000)),10000);
			var a6_12 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11,a12),math.multiply(a5_12,a22)),0.1667,Ts),10000)),10000);
			var a6_21 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a11),math.multiply(a5_22,a21)),0.1667,Ts),10000)),10000);
			var a6_22 = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21,a12),math.multiply(a5_22,a22)),0.1667,Ts),10000)),10000);
			
			
			var ad11 = math.divide(math.round(math.multiply(math.add(1,a1_11,a2_11,a3_11,a4_11,a5_11,a6_11),10000)),10000);
			var ad12 = math.divide(math.round(math.multiply(math.add(a1_12,a2_12,a3_12,a4_12,a5_12,a6_12),10000)),10000);
			var ad21 = math.divide(math.round(math.multiply(math.add(a1_21,a2_21,a3_21,a4_21,a5_21,a6_21),10000)),10000);
			var ad22 = math.divide(math.round(math.multiply(math.add(1,a1_22,a2_22,a3_22,a4_22,a5_22,a6_22),10000)),10000);
			
			///// for g matrix
			
			var a1_11b = math.divide(math.round(math.multiply(math.multiply(a11,Ts,0.5),10000)),10000);
			var a1_12b = math.divide(math.round(math.multiply(math.multiply(a12,Ts,0.5),10000)),10000);
			var a1_21b = math.divide(math.round(math.multiply(math.multiply(a21,Ts,0.5),10000)),10000);
			var a1_22b = math.divide(math.round(math.multiply(math.multiply(a22,Ts,0.5),10000)),10000);
			
			var a2_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a11),math.multiply(a12,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a11,a12),math.multiply(a12,a22)),0.1667,Ts,Ts),10000)),10000);
			var a2_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a11),math.multiply(a22,a21)),0.1667,Ts,Ts),10000)),10000);
			var a2_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a21,a12),math.multiply(a22,a22)),0.1667,Ts,Ts),10000)),10000);
			
			var a3_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a11),math.multiply(a2_12b,a21)),0.25,Ts),10000)),10000);
			var a3_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_11b,a12),math.multiply(a2_12b,a22)),0.25,Ts),10000)),10000);
			var a3_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a11),math.multiply(a2_22b,a21)),0.25,Ts),10000)),10000);
			var a3_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a2_21b,a12),math.multiply(a2_22b,a22)),0.25,Ts),10000)),10000);
			
			var a4_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a11),math.multiply(a3_12b,a21)),0.2,Ts),10000)),10000);
			var a4_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_11b,a12),math.multiply(a3_12b,a22)),0.2,Ts),10000)),10000);
			var a4_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a11),math.multiply(a3_22b,a21)),0.2,Ts),10000)),10000);
			var a4_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a3_21b,a12),math.multiply(a3_22b,a22)),0.2,Ts),10000)),10000);
			
			var a5_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a11),math.multiply(a4_12b,a21)),0.1667,Ts),10000)),10000);
			var a5_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_11b,a12),math.multiply(a4_12b,a22)),0.1667,Ts),10000)),10000);
			var a5_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a11),math.multiply(a4_22b,a21)),0.1667,Ts),10000)),10000);
			var a5_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a4_21b,a12),math.multiply(a4_22b,a22)),0.1667,Ts),10000)),10000);
			
			var a6_11b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a11),math.multiply(a5_12b,a21)),0.1428,Ts),10000)),10000);
			var a6_12b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_11b,a12),math.multiply(a5_12b,a22)),0.1428,Ts),10000)),10000);
			var a6_21b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a11),math.multiply(a5_22b,a21)),0.1428,Ts),10000)),10000);
			var a6_22b = math.divide(math.round(math.multiply(math.multiply(math.add(math.multiply(a5_21b,a12),math.multiply(a5_22b,a22)),0.1428,Ts),10000)),10000);
			
			var ad11b = math.divide(math.round(math.multiply(math.add(1,a1_11b,a2_11b,a3_11b,a4_11b,a5_11b,a6_11b),10000)),10000);
			var ad12b = math.divide(math.round(math.multiply(math.add(a1_12b,a2_12b,a3_12b,a4_12b,a5_12b,a6_12b),10000)),10000);
			var ad21b = math.divide(math.round(math.multiply(math.add(a1_21b,a2_21b,a3_21b,a4_21b,a5_21b,a6_21b),10000)),10000);
			var ad22b = math.divide(math.round(math.multiply(math.add(1,a1_22b,a2_22b,a3_22b,a4_22b,a5_22b,a6_22b),10000)),10000);
			
			var bd1 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b1,Ts),math.multiply(ad12b,b2,Ts)),10000)),10000);
			//var bd12 = math.divide(math.round(math.multiply(math.add(math.multiply(ad11b,b12,Ts),math.multiply(ad12b,b22,Ts)),10000)),10000);
			var bd2 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b1,Ts),math.multiply(ad22b,b2,Ts)),10000)),10000);
			//var bd22 = math.divide(math.round(math.multiply(math.add(math.multiply(ad21b,b12,Ts),math.multiply(ad22b,b22,Ts)),10000)),10000);
			
			var ad13=ad23=ad32=bd3=0;
			var ad31=-Ts;
			var ad33=1;
			
			var mF = math.matrix([[ad11, ad12, ad13], [ad21, ad22, ad23],[ad31, ad32,ad33]]);
			var mg = math.matrix([[bd1], [bd2],[bd3]]);
			
			var mC= math.matrix([[c11, c12, c13]]);
			
			var aad11= ad11*ad11+ad12*ad21+ad13*ad31;
			var aad12= ad11*ad12+ad12*ad22+ad13*ad32;
			var aad13= ad11*ad13+ad12*ad23+ad13*ad33;
			
		
			var aad21= ad21*ad11 +ad22*ad21 +ad23*ad31 ;
			var aad22= ad21*ad12 +ad22*ad22 +ad23*ad32 ;
			var aad23= ad21*ad13 +ad22*ad23 +ad23*ad33 ;
			
			
			var aad31= ad31*ad11 +ad32*ad21 +ad33*ad31 ;
			var aad32= ad31*ad12 +ad32*ad22 +ad33*ad32 ;
			var aad33= ad31*ad13 +ad32*ad23 +ad33*ad33 ;
			
			
			
			
			///////////////////////////////////////////
			
			var aad11= ad11*ad11+ad12*ad21+ad13*ad31;
			var aad12= ad11*ad12+ad12*ad22+ad13*ad32;
			var aad13= ad11*ad13+ad12*ad23+ad13*ad33;
			
		
			var aad21= ad21*ad11 +ad22*ad21 +ad23*ad31 ;
			var aad22= ad21*ad12 +ad22*ad22 +ad23*ad32 ;
			var aad23= ad21*ad13 +ad22*ad23 +ad23*ad33 ;
			
			
			var aad31= ad31*ad11 +ad32*ad21 +ad33*ad31 ;
			var aad32= ad31*ad12 +ad32*ad22 +ad33*ad32 ;
			var aad33= ad31*ad13 +ad32*ad23 +ad33*ad33 ;
			
			
			
			
			//////////////////////////////////////////////
			
			var abd1= math.divide(math.round(math.multiply(bd1*ad11 +bd2*ad12 +bd3*ad13 ,1000)),1000);
			var abd2= math.divide(math.round(math.multiply(bd1*ad21 +bd2*ad22 +bd3*ad23 ,1000)),1000);
			var abd3= math.divide(math.round(math.multiply(bd1*ad31 +bd2*ad32 +bd3*ad33 ,1000)),1000);
			
			
			////////////////////////////////////////////////
			
			var aabd1= math.divide(math.round(math.multiply(bd1*aad11 +bd2*aad12 +bd3*aad13 ,1000)),1000);
			var aabd2= math.divide(math.round(math.multiply(bd1*aad21 +bd2*aad22 +bd3*aad23 ,1000)),1000);
			var aabd3= math.divide(math.round(math.multiply(bd1*aad31 +bd2*aad32 +bd3*aad33 ,1000)),1000);
			
			
			/////////////////////////////////////////////
			
			
			
			
			//////////////////////////////////////////////
			var ga= math.matrix([bd1, bd2, bd3 ]);
			var Faga= math.matrix([abd1,abd2, abd3 ]);
			var FaFaga= math.matrix([aabd1, aabd2, aabd3]);
						
			document.getElementById('matQcg').innerHTML = '<span style="font-family:calibri;font-style:italic;font-size:18px">g<sub>a</sub></span> ='+ ga;
			document.getElementById('matQcFg').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F<sub>a</sub></span><span style="font-family:calibri;font-style:italic;font-size:18px">g<sub>a</sub></span> ='+ Faga;
			document.getElementById('matQcFFg').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F<sub>a</sub></span><sup>2</sup><span style="font-family:calibri;font-style:italic;font-size:18px">g<sub>a</sub></span> ='+ FaFaga;
			
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qc= math.matrix([[bd1, abd1, aabd1],[bd2, abd2, aabd2],[bd3, abd3, aabd3]]);
			
			document.getElementById('matQc').innerHTML = ' <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">Q<sub>c</sub></span> =['+ bd1+',\t'+abd1+',\t'+aabd1+';\t\t'+bd2+','+abd2+',\t'+aabd2+';\t\t'+bd3+',\t'+abd3+',\t'+aabd3+']'
			
			var DQc= math.divide(math.round(math.multiply(math.det(Qc),1000)),1000);
			console.log(DQc);
			//document.getElementById('RQc').value = 4;
			//DQc=0;
			
			if (DQc!=0)
			{  Cntrl_Test1=" Rank is 3";			   
			   Cntrl_Test2="Determinent is " +DQc+ "";				    
			   Cntrl_Test3=" System is completely controllable";
			   document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
			   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
			   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   
			   var p123 = math.multiply(p1,p2,p3);
			   
			   var p12 = math.multiply(p1,p2);
			   var p13 = math.multiply(p1,p3);
			   var p23 = math.multiply(p2,p3);
			   
			   /* var k2 = math.divide(math.round(math.multiply(math.divide(math.add(p1,p2,p3,ad22,2),bd2),1000)),1000);
			   console.log(k2);
			   var k1 = math.divide(math.round(math.multiply(math.divide(math.add(p12,p23,p13,-ad22,-ad22,-1,math.multiply(2,bd2,k2)),math.multiply(ad12,bd2)),1000)),1000);
			   console.log(k1);
			   var k3 = math.divide(math.round(math.multiply(math.divide(math.add(-p123,-ad22,-math.multiply(ad12,bd2,k1),math.multiply(bd2,k2)),math.multiply(ad12,ad31,bd2)),1000)),1000);
			   
			   console.log(k3); */
			   
			   //var k1 = math.divide(p1p2p3p4, math.add(a23b4,-a43b2));
			   
			   
			   var coeff = [ [ bd1, bd2, 0],[math.add(math.multiply(ad12,bd2),-math.multiply(bd1,ad22),-bd1), -math.multiply(2,bd2), math.multiply(ad31,bd1)],[math.add(math.multiply(ad22,bd1),-math.multiply(ad12,bd2)),bd2,math.add(math.multiply(ad12,bd2,ad31),-math.multiply(ad31,bd1,ad22))] ];
			   var cont = [math.add(ad22,-p1,-p2,-p3,2), math.add(math.multiply(p1,p2),math.multiply(p1,p3),math.multiply(p2,p3),-math.multiply(2,ad22),-1), math.add(ad22,-math.multiply(p1,p2,p3))];
			   var sol = math.lusolve(coeff,cont);
			   
			   var k1 = math.divide(math.round(math.multiply(sol[0][0],1000)),1000);
			   var k2 = math.divide(math.round(math.multiply(sol[1][0],1000)),1000);
			   var k3 = math.divide(math.round(math.multiply(sol[2][0],1000)),1000);
			   
			   
			   
			   console.log(k1);
			   console.log(k2);
			   console.log(k3);
			   
			   
			  /* K1="Feedback gain k1 = " +k1+ "";
			   
			   document.getElementById("Feedback_gain_Value1").innerHTML=K1;
			   
			   K2="Feedback gain k2 = " +k2+ "";
			   
			   document.getElementById("Feedback_gain_Value2").innerHTML=K2;
			   
			   K3="Feedback gain k3 = " +k3+ "";
			   
			   document.getElementById("Feedback_gain_Value3").innerHTML=K3;
			   
			   
			   K4="Feedback gain k4 = " +k4+ "";
			   
			   document.getElementById("Feedback_gain_Value4").innerHTML=K4; */
			   
			   var Ka = math.matrix([[ k1, k2, k3]]);
			   
			   console.log(Ka);
			   
			   
			   var Padd = math.divide(math.round(math.multiply(math.add(-p1,-p2,-p3),1000)),1000);
			   var P12add = math.divide(math.round(math.multiply(math.add(p12,p13,p23),1000)),1000);
			   var P123 = math.divide(math.round(math.multiply(math.multiply(-p1,-p2,-p3),1000)),1000);
			   
			   DCharEq=" Desired characteristic equation from poles\t:";
			   document.getElementById("DChar_Eq").innerHTML=DCharEq;
			   document.getElementById('Desired_char').innerHTML = '  \t z<sup>3</sup>\t+('+Padd+')z<sup>2</sup>\t+\t('+P12add+')\t z +\t('+P123+')\t=\t0';
			   
			   
			   
			   var ad22_2 = math.divide(math.round(math.multiply(math.add(-ad22,-2),1000)),1000);
			   
			   var ad22_1 = math.divide(math.round(math.multiply(math.add(ad22,ad22,1),1000)),1000);
			   var bd2_2 = math.divide(math.round(math.multiply(math.add(bd2,bd2),1000)),1000);
			   var ad12bd2 = math.divide(math.round(math.multiply(math.multiply(ad12,bd2),1000)),1000);
			   var ad22bd1 = math.divide(math.round(math.multiply(math.multiply(ad22,bd1),1000)),1000);
			   var ad31bd1 = math.divide(math.round(math.multiply(math.multiply(ad31,bd1),1000)),1000);
			   
			   var ad12bd2_bd1_ad22bd1 = math.divide(math.round(math.multiply(math.add(ad12bd2,-bd1,-ad22bd1),1000)),1000);
			   var ad22bd1_ad12bd2 = math.divide(math.round(math.multiply(math.add(ad22bd1,-ad12bd2),1000)),1000);
			   
			   var ad12ad31bd2 = math.divide(math.round(math.multiply(math.multiply(ad12,ad31,bd2),1000)),1000);
			   var ad22ad31bd1 = math.divide(math.round(math.multiply(math.multiply(ad22,ad31,bd1),1000)),1000);
			   
			   var ad12ad31bd2_ad22ad31bd1 = math.divide(math.round(math.multiply(math.add(ad12ad31bd2,-ad22ad31bd1 ),1000)),1000);
			   
			   CharEq=" Characteristic equation of the closed loop system\t:";
			   document.getElementById("Char_Eq").innerHTML=CharEq;
			   document.getElementById('Closed_loop_char').innerHTML = ' \t z<sup>3</sup>\t+\t[\t('+ bd1+')k<sub>1</sub>\t+\t('+ bd2+')k<sub>2</sub>\t-\t('+ad22_2+')\t]\t z<sup>2</sup>\t+\t[\t('+ad12bd2_bd1_ad22bd1+')\tk<sub>1</sub>\t-\t('+bd2_2+')\tk<sub>2</sub>\t+\t('+ad31bd1+')\tk<sub>3</sub>\t+\t'+ad22_1+'\t]\t z\t+\t[\t('+ad22bd1_ad12bd2+')\t k<sub>1</sub>\t+\t('+bd2+')\tk<sub>2</sub>\t+\t('+ad12ad31bd2_ad22ad31bd1+')k<sub>3</sub>\t-\t('+ad22+')]\t=\t0';    
			   
			  // Kfb="Feedback gain K = " +K+ "";
			   
			   //document.getElementById("Feedback_gain_Value_K").innerHTML=Kfb;
			   
			   document.getElementById('Feedback_gain_Value_K').innerHTML = ' Feedback Gain Values K =['+ k1+',\t'+k2+',\t'+k3+']';
			   
			  // PIDv=" Desinged PID controller\t:";
			  // document.getElementById("PID_v").innerHTML=PIDv;
			   document.getElementById('PID_Controller').innerHTML = ' PID Values : \t K<sub>p</sub>\t=\t'+ k1+';\tK<sub>i</sub>\t=\t'+k3+';\tK<sub>d</sub>\t=\t'+k2+'';
			   
			   
			}
			   else 
			   {   Cntrl_Test1=" Rank < n = 3";
		           Cntrl_Test2="Determinent is " +DQc+ "";		
			       Cntrl_Test3=" System is not controllable";
			       document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
				   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
				   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   }
		
}
function showRank(){
document.getElementById("Cntrl_Test1").style.display="block";	
}

function showDetQc(){
document.getElementById("Cntrl_Test2").style.display="block";	
}

function showinfo(){
document.getElementById("Cntrl_Test3").style.display="block";
}

function GVc(){
document.getElementById("DChar_Eq").style.display="block";
document.getElementById("Desired_char").style.display="block";
document.getElementById("Char_Eq").style.display="block";
document.getElementById("Closed_loop_char").style.display="block";
document.getElementById("Feedback_gain_Value_K").style.display="block";
document.getElementById("PID_Controller").style.display="block";
}




function test1(){
	document.getElementById('dropdownMenuButton1').innerHTML='State Feedback Controller';
	document.getElementById('chktest').value=0;
	document.getElementById('Trun').style.display="block";
}




function str(){
	if(document.getElementById('chktest').value==0){
		CNTR();
	}
	if(document.getElementById('chktest').value==1){
		OBSR();
	}
	
}



