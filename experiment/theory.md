# Theory

<div align="center">
<img class="img-fluid"  src="./images/DC Motor.png" alt=""><br>        
<figcaption style="color:black"> Fig.1. DC Motor Model </figcaption>						  
</div><br/>			        
<b><i>The DC motor dynamics:</i></b> <br>
The DC motor dynamics are represted by the following equation: <br/>
<b><i>Mechanical equation:</i></b> <br>

$$ J\ddot{\theta}(t)+b{\dot\theta}(t)=K u(t)  \tag{1}$$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">J</span> is the motor inertia, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">b</span> is the damping coefficient, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> is the motor constant, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">θ(t)</span> is the angular position of the motor, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u(t)</span> is the input voltage (control input). 
<br/><br/>

<b><i>Electrical equation:</i></b> <br>

$$ L \dot{i}(t)+R {i}(t)=u(t)  \tag{2}$$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">L</span> is the inductance, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">R</span> is the resistance, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">i(t)</span> is the motor current. 
<br/><br/>

<b><i>Transfer Function:</i></b> <br>

$$ G(s) = \frac{θ(s)}{u(s)} = \frac{K}{J s^2 + b s}   \tag{3}$$

Linear time invariant system may be represented in state space form by the following equations:<br/>
State equation:

$$ \dot{x}(t)=A x(t)+B u(t) \tag{4a} $$

Output equation:

$$ y(t)= C x(t) \tag{4b} $$

Discrete state space form represented by the following equations:<br/>
State equation:

$$ {x}[k+1]=F x[k]+g u[k] \tag{5a} $$

Output equation:

$$ y[k]= C x[k] \tag{5b} $$

<div align="center">
<img class="img-fluid"  src="./images/F_g.png" alt=""><br>
</div>
<b><i>Adding Integral State for PID Control:</i></b> <br>
The integral state is defined as:<br/>

$$ x_3 [k+1]=x_3 [k]+Ts(r[k]-x_1 [k]) \tag{6} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">r[k]</span> is the reference input, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>1</sub>[k]</span> is the position <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">θ[k]</span>.
<br/><br/>
<b><i>State Space Model of the DC motor:</i></b> <br>
<br/> Continuous State Space form: <br/>

$$	\begin{bmatrix} 	\dot{x}_1(t)  \newline	\dot{x}_2(t) \end{bmatrix}	= \begin{bmatrix} 	0  & 1 \newline	0 & -\frac{b}{J} \end{bmatrix} \begin{bmatrix} 	x_1(t)  \newline	x_2(t) \end{bmatrix} + \begin{bmatrix} 0  \newline	\frac{K}{J} \end{bmatrix} u(t)	\quad	\tag{7} $$ 

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>1</sub></span> is the position ( <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">θ</span> ), <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>2</sub></span> is the velocity, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u(t)</span> is the input voltage, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">y(t)</span> is the outpuy (position <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">θ</span> ). 
<br/><br/>
<br/> Discrete State Space form:

$$	\begin{bmatrix} 	x_1 [k+1]  \newline	x_2 [k+1] \end{bmatrix}	= \begin{bmatrix} 	1  & T_{s} \newline	0 & 1-\frac{b}{J} T_{s} \end{bmatrix} \begin{bmatrix} 	x_1 [k] \newline	x_2 [k] \end{bmatrix} + \begin{bmatrix} \frac{K {T_{s}}^2}{2J}  \newline	\frac{K T_{s}}{J} (1-\frac{b T_{s}}{2J}) \end{bmatrix} u[k]	\quad	\tag{8}$$ 

<br/> Discrete State Space form with Integral state:

$$	\begin{bmatrix} 	x_1 [k+1]  \newline	x_2 [k+1] \newline x_3[k+1] \end{bmatrix}	= \begin{bmatrix} 	1  & T_{s} & 0 \newline	0 & 1-\frac{b}{J} T_{s} & 0 \newline -T_{s} & 0 & 1 \end{bmatrix} \begin{bmatrix} 	x_1 [k] \newline	x_2 [k] \newline x_3[k] \end{bmatrix} + \begin{bmatrix} \frac{K {T_{s}}^2}{2J}  \newline	\frac{K T_{s}}{J} (1-\frac{b T_{s}}{2J}) \newline 0\end{bmatrix} u[k]	\quad	\tag{9} $$ 

<b><i>Designing the State Feedback Controller:</i></b> <br>
Now that the discretized system with the integral state is available, the next step is to design the state feedback controller using pole placement. In this process, the objective is to determine the feedback gains that place the poles of the closed-loop system at desired locations for achieving the desired stability and performance.<br/>
The control law is:

$$ u[k] = - K x[k] + r[k] \tag{10} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K </span> = [ k<sub>1</sub>, k<sub>2</sub>,k<sub>3</sub> ] is the state feedback gain matrix corresponding to the position, velocity, and integral error terms.
<br/><br/>
Using pole placement techniques, compute the feedback gains that place the poles of the closed-loop system at desired locations.
<br/>
This ensures that the closed-loop system behaves with the desired PID-like control:<br/>
Proportional control <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>p</sub></span> : Provided by <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>1</sub></span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] (position), that is ( <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k<sub>1</sub></span> ), <br/>
Derivative control <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>d</sub></span> : Provided by <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>2</sub></span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] (velocity), that is ( <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k<sub>2</sub></span> ), <br/>
Integral control <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>i</sub></span> : Provided by <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>3</sub></span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] (integral of the error) ( <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k<sub>3</sub></span> ). <br/>
<br/>

<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>