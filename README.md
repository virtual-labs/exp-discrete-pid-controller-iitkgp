## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Design of a discrete PID controller for a DC motor and Exp 10

### About the Experiment 

Designing a discrete PID controller for a DC motor involves adapting the traditional continuous PID control strategy to a discrete-time system, where the control signal is updated at regular intervals. 
In real-world applications, especially with digital computers or microcontrollers, the control system operates in discrete time rather than continuous time. 
A discrete PID controller calculates the control signal at each sampling step based on the error between the desired and actual motor outputs (e.g., speed or position).
The discrete PID controller consists of three terms: Proportional (P), Integral (I), and Derivative (D). Each term is computed using the error signal and its past values, with the discrete-time version typically expressed as:
</br>

<img class="img-fluid"  src="experiment/images/D_PID_Eq.png" alt=""><br>
$$                   \tag{1} $$
</div>
</br>
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">e</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is the error, <span style="font-family:Sitka Text;font-style:italic">T<sub>s</sub></span> is the sampling time, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>p</sub></span>, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>i</sub></span>, and <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K<sub>d</sub></span> are are the controller gains. The design process involves selecting appropriate sampling rates, tuning the PID gains, and ensuring system stability and performance over discrete time steps.
The discrete PID controller is essential for digital systems controlling DC motors, offering precise control over motor speed, position, and torque in real-time applications.</br></br>

<b><i>Designing a discrete PID controller using State Space Model:</i></b> <br>

Linear time invariant system may be represented in state space form by the following equations:<br/>
State equation:
$$ \dot{x}(t)=A x(t)+B u(t) \tag{2a} $$
Output equation:
$$ y(t)= C x(t) u(t) \tag{2b} $$

Discrete state space form represented by the following equations:<br/>
State equation:
$$ {x}[k+1]=F x[k]+g u[k] \tag{3a} $$
Output equation:
$$ y[k])= C x[k] u[k] \tag{3b} $$
<div align="center">
<img class="img-fluid"  src="./images/F_g.png" alt=""><br>
</div>
<b><i>Adding Integral State for PID Control:</i></b> <br>
The integral state is defined as:<br/>

$$ x_3 [k+1]=x_3 [k]+T_s(r[k]-x_1 [k]) \tag{4} $$
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">r[k]</span> is the reference input (desired position), <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>1</sub>[k]</span> is the position <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">θ[k]</span>.
<br/><br/>


<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>