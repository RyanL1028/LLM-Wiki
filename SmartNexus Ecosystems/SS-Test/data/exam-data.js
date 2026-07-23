// Cambridge IGCSE Computer Science Exam Papers
// Generated from PDF question papers and mark schemes

const EXAM_PAPERS = {

  // ========== PAST PAPERS ==========

  '0478_11_m24': {
    id: '0478_11_m24',
    subject: 'Computer Science',
    subject: 'Computer Science',
    code: '0478/11',
    paper: 'Paper 1',
    name: 'Computer Systems',
    description: 'Core theory covering data representation, data transmission, hardware, software, the internet, and cybersecurity.',
    type: 'past',
    session: 'May/June 2024',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Portable Tablet Computer', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A student has a portable tablet computer.\nIdentify two input devices that could be built into the portable tablet computer.', keywords: [['touch screen','touchscreen'],['microphone','mic'],['button','buttons'],['webcam','camera','digital camera'],['accelerometer'],['biometric','fingerprint','fingerprint scanner','face id']], anyOf: 2 },
        { label: 'b', marks: 1, type: 'short', question: 'Identify one output device that could be built into the portable tablet computer.', keywords: [['screen','display','touchscreen display'],['speaker','speakers'],['LED','LED light']], anyOf: 1 },
        { label: 'c', marks: 1, type: 'short', question: 'Identify one type of storage device that could be built into the portable tablet computer.', keywords: [['SSD','solid state','solid-state','solid state drive','flash memory','flash storage']], anyOf: 1 }
      ]},
      { num: 2, topic: 'Hexadecimal', parts: [
        { label: 'a', marks: 1, type: 'mcq', question: 'Tick (✓) one box to show which statement about the hexadecimal number system is incorrect.', options: ['A: It uses the values 0 to 9 and A to F.','B: It can be used as a shorter representation of binary.','C: It is a base 10 system.','D: It can be used to represent error codes.'], answer: 2 },
        { label: 'b', marks: 3, type: 'short', question: 'Convert the three denary numbers to hexadecimal.\n(i) 20\n(ii) 32\n(iii) 165', keywords: [['14','0x14','0E','hex 14'],['20','0x20'],['A5','a5','0xA5','0xa5']], anyOf: 3 }
      ]},
      { num: 3, topic: "Binary & Two's Complement", parts: [
        { label: 'a', marks: 1, type: 'short', question: 'The binary number 10100011 is stored in RAM.\nA logical left shift of three places is performed on the binary number.\nGive the 8-bit binary number that will be stored after the shift has taken place.', keywords: [['00011000']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'mcq', question: 'Tick (✓) one box to show which statement about a logical left shift of two places is correct.', options: ['A: It would divide the binary number by 2.','B: It would multiply the binary number by 2.','C: It would divide the binary number by 4.','D: It would multiply the binary number by 4.'], answer: 3 },
        { label: 'c', marks: 2, type: 'long', question: "10100011 can be stored as a two's complement integer.\nConvert the two's complement integer 10100011 to denary. Show all your working.", keywords: [['flip','invert','complement','01011100'],['add','plus','1','01011101','10100011']], anyOf: 2 },
        { label: 'd', marks: 1, type: 'short', question: 'State how many bytes there are in a kibibyte (KiB).', keywords: [['1024']], anyOf: 1 }
      ]},
      { num: 4, topic: 'Data Transmission', parts: [
        { label: 'a', marks: 3, type: 'long', question: 'Data packets are transmitted across a network from one computer to another computer.\nDescribe the structure of a data packet.', keywords: [['header','source','destination','address'],['payload','data','body'],['trailer','end','checksum','error check']], anyOf: 3 },
        { label: 'b', marks: 1, type: 'short', question: 'Packet switching is used to transmit the data packets across the network.\nIdentify the device that controls which path is taken by each data packet.', keywords: [['router']], anyOf: 1 },
        { label: 'c', marks: 3, type: 'long', question: 'Serial data transmission is used to transmit the data packets across the network.\nExplain why serial data transmission is used to transmit the data packets.', keywords: [['reliable','reliability','less error','fewer error'],['sequence','order','bits not skewed','less skew','data skew'],['crosstalk','interference','less interference']], anyOf: 3 }
      ]},
      { num: 5, topic: 'Memory & Storage', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'A computer uses both RAM and secondary storage.\nState the purpose of secondary storage.', keywords: [['store','permanent','permanently','long term','retain','save'],['data','files','software','programs']], anyOf: 1 },
        { label: 'b', marks: 3, type: 'choosethree', question: 'One type of secondary storage is optical.\nCircle three examples of optical storage from the list below.\n\nROM (read only memory) | SD card (secure digital) | CD (compact disk) | HDD (hard disk drive) | DVD (digital versatile disk) | Blu-ray disk | USB drive (universal serial bus) | SSD (solid-state drive)', correctIndices: [2, 4, 5], options: ['ROM (read only memory)','SD card (secure digital)','CD (compact disk)','HDD (hard disk drive)','DVD (digital versatile disk)','Blu-ray disk','USB drive','SSD (solid-state drive)'] },
        { label: 'c', marks: 3, type: 'long', question: 'Explain why a computer needs RAM.', keywords: [['temporarily','temporary'],['currently','current','in use','running'],['faster','speed','quick','quickly','speed up'],['data','software','programs','instructions']], anyOf: 3 },
        { label: 'd', marks: 4, type: 'long', question: 'The computer processes instructions using the fetch–decode–execute (FDE) cycle.\nDraw and annotate a diagram to show the process of the fetch stage of the FDE cycle. Your answer should include the roles of the MAR, MDR, PC and the address and data buses.', keywords: [['PC','program counter','address','MAR','memory address register'],['address bus','address'],['incremented','increment','next'],['RAM','memory','MDR','memory data register','data bus','data','instruction']], anyOf: 4 }
      ]},
      { num: 6, topic: 'Firmware & System Software', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'A computer needs firmware and system software to operate.\nState the purpose of firmware.', keywords: [['boot','bootstrap','start','startup','boot up'],['hardware','platform','control','manage','communicat'],['ROM','permanent','secure']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'short', question: 'Give one example of firmware.', keywords: [['BIOS','bootstrap','bootloader','boot loader','UEFI']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Give two examples of system software.', keywords: [['operating system','OS'],['utility','utilities','device driver','device drivers','compiler','assembler','interpreter','linker']], anyOf: 2 }
      ]},
      { num: 7, topic: 'Encryption', parts: [
        { label: '', marks: 4, type: 'fillblank', question: 'Complete the paragraph about asymmetric encryption using terms from the list.\n\nWord bank: asymmetric | certificate | cipher text | decrypted | encrypted | parallel key | plain text | private key | protected | public key | serial key | symmetric\n\nSome terms will not be used. Use each term only once.',
          blanks: [
            { id: 'a', prompt: '__________', answer: 'plain text', keywords: [['plain text','plaintext']] },
            { id: 'b', prompt: 'is encrypted into __________', answer: 'cipher text', keywords: [['cipher text','ciphertext']] },
            { id: 'c', prompt: 'using a __________', answer: 'public key', keywords: [['public key','public']] },
            { id: 'd', prompt: 'The encrypted data is then transmitted and decrypted using a __________', answer: 'private key', keywords: [['private key','private']] }
          ]
        }
      ]},
      { num: 8, topic: 'Robotics', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'A farmer uses an automated robot to plant seeds in the field.\nState what is meant by the robot being automated.', keywords: [['without human','no human','without intervention','on its own','independently','by itself','automatically','autonomous']], anyOf: 1 },
        { label: 'b', marks: 3, type: 'short', question: 'Give three characteristics of a robot.', keywords: [['mechanical','framework','structure','frame'],['electrical','electronic'],['programmable','program'],['move','movement','motion','moving']], anyOf: 3 },
        { label: 'c', marks: 6, type: 'long', question: 'The robot plants seeds and stops when it reaches a fence. It then turns and continues planting seeds. The robot uses sensors and a microprocessor to know when it reaches a fence.\nExplain how the robot uses sensors and a microprocessor to know it has reached a fence.', keywords: [['sensor','proximity','ultrasonic','infrared','camera','detect'],['digitised','digital','convert','signal','data','send'],['microprocessor','processor','compare','stored','value','range'],['matches','within','equal','reached','detected'],['outside','above','below','not match','different','not reached'],['actuator','motor','turn','stop','move','steer','action']], anyOf: 6 },
        { label: 'd', marks: 2, type: 'short', question: 'Give two advantages of using the robot rather than a human to plant seeds.', keywords: [['accurate','accuracy','precise','precision'],['break','rest','24/7','continuous','always','tired','bored'],['repetitive','boring','same','monotonous'],['farmer','human','person','worker'],['faster','speed','efficient','efficiency','more'],['safer','safe','danger','dangerous'],['labour','labor','wage','cost','pay','cheaper']], anyOf: 2 },
        { label: 'e', marks: 2, type: 'short', question: 'Give two disadvantages of using the robot rather than a human to plant seeds.', keywords: [['expensive','cost','costly','purchase','buy'],['maintenance','maintain','repair','service'],['jobs','job','unemployment','replace'],['deskilled','deskill','skill'],['training','train','learn'],['break','broken','fault','malfunction','fail'],['adapt','unexpected','new','unforeseen','change']], anyOf: 2 },
        { label: 'f', marks: 2, type: 'short', question: 'Describe how machine learning could improve the performance of the robot.', keywords: [['adapt','change','modify','update','learn'],['rules','data','process','behaviour','behavior'],['efficient','efficiency','improve','better'],['remember','memory','knowledge','surrounding','environment','fence','obstacle','route','path']], anyOf: 2 }
      ]},
      { num: 9, topic: 'Data Integrity & Security', parts: [
        { label: 'a', marks: 3, type: 'short', question: 'Give three ways data could become corrupted during transmission over a network.', keywords: [['lost','lose'],['gained','gain','added','add'],['changed','change','alter'],['wrong order','reassembled','order','reorder'],['interference','interfere'],['crosstalk','cross talk'],['collision','collide'],['time out','timeout','hop count','TTL'],['malware','virus','infected','infect']], anyOf: 3 },
        { label: 'b(i)', marks: 8, type: 'long', question: 'Describe how parity check and Automatic Repeat Request (ARQ) are used together to ensure data is transmitted correctly.', keywords: [['count','number','1s','ones','sum'],['parity bit','extra bit','additional bit'],['odd','even'],['send','transmit','sent'],['timer','timeout','time'],['receive','receiving','check','verify'],['acknowledgement','acknowledge','ACK','confirmation','confirm'],['resend','retransmit','send again','next packet']], anyOf: 6 },
        { label: 'b(ii)', marks: 2, type: 'short', question: 'Give two other methods of error checking.', keywords: [['echo check','echo'],['checksum','check sum'],['even parity','parity']], anyOf: 2 },
        { label: 'c(i)', marks: 5, type: 'long', question: 'Describe how a firewall works to protect a network.', keywords: [['criteria','rules','policy','set'],['blacklist','whitelist','allow','block','IP','address'],['examine','check','inspect','monitor','traffic','packet'],['meets','match','matches','allowed','permitted'],['reject','block','deny','drop','prevent'],['port','ports','close','block','open']], anyOf: 5 },
        { label: 'c(ii)', marks: 2, type: 'short', question: 'Give two types of malware.', keywords: [['virus'],['worm'],['trojan','trojan horse'],['spyware'],['adware'],['ransomware']], anyOf: 2 }
      ]}
    ]
  },

  '0478_21_m24': {
    id: '0478_21_m24',
    subject: 'Computer Science',
    code: '0478/21',
    paper: 'Paper 2',
    name: 'Algorithms, Programming and Logic',
    description: 'Problem-solving covering algorithm design, pseudocode, logic gates, program tracing, and error checking.',
    type: 'past',
    session: 'May/June 2024',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Validation', parts: [
        { label: '', marks: 1, type: 'mcq', question: 'A validation check to make sure that an email address contains an \'@\' sign is a:', options: ['A: range check', 'B: visual check', 'C: presence check', 'D: format check'], answer: 3 }
      ]},
      { num: 2, topic: 'Programming Concepts', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Match each description to the most appropriate programming concept.\n\n1. a subroutine that may not return a value\n2. a value that is declared and used within a specific procedure\n3. a value that a procedure expects you to supply when it is called\n4. a subroutine that will always return a value\n\nGive your four matches (e.g. 1=procedure, 2=local variable, etc.).', keywords: [['procedure'],['local variable','local'],['parameter'],['function']], anyOf: 4 },
        { label: 'b', marks: 2, type: 'short', question: 'Write pseudocode to use a procedure named Average that passes the values 25 and 50 to the procedure.', keywords: [['CALL','call'],['Average','25','50','Average(25,50)']], anyOf: 2 },
        { label: 'c', marks: 3, type: 'long', question: 'Outline the role of procedures and functions in creating a program that is easier to maintain.', keywords: [['divide','smaller','manageable','segments','modules'],['readable','easier to understand','debug','maintain'],['meaningful names','documentation','abstraction'],['re-used','reused','library','reusable','single line'],['reduce','repeated','duplicate','repetition','eliminate']], anyOf: 3 }
      ]},
      { num: 3, topic: 'Data Types', parts: [
        { label: '', marks: 4, type: 'short', question: 'State what is meant by the data types integer and real. Give an example of each.\n\nInteger: \nExample: \nReal: \nExample:', keywords: [['whole number','no fractional'],['27','10','any whole number','42'],['fractional','decimal','floating'],['18.75','3.14','any decimal']], anyOf: 4 }
      ]},
      { num: 4, topic: 'Pseudocode Debugging', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Identify the 4 errors in this pseudocode and suggest corrections.\n\n01 DECLARE Loop : STRING\n02 DECLARE Limit : INTEGER\n03 DECLARE Value : REAL\n04 DECLARE Total : REAL\n05 Total ← 0\n06 Limit ← ROUND(RANDOM() * 19,0) + 1\n07 IF Loop ← 1 TO Limit\n08     OUTPUT "Enter a number"\n09     INPUT Loop\n10     Total ← Total * Value\n11 NEXT Loop\n12 OUTPUT "The total of the numbers entered is ", Total\n13 OUTPUT "The average of the numbers entered is ", Total / Limit', keywords: [['STRING','INTEGER','line 01','line 1','Loop declaration'],['IF','FOR','line 07','line 7','FOR Loop'],['INPUT Loop','INPUT Value','line 09','line 9'],['*','multiply','addition','+','Total + Value','line 10']], anyOf: 4 },
        { label: 'b', marks: 2, type: 'short', question: 'Write pseudocode to output the average calculated in line 13 rounded to one decimal place.', keywords: [['ROUND'],['Total','Limit','Total / Limit'],['1','one decimal']], anyOf: 2 },
        { label: 'c', marks: 4, type: 'long', question: 'Explain how to alter the original corrected algorithm to ensure all numbers entered are between 1 and 500 inclusive. If a number is outside these limits, a replacement value is requested and entered.', keywords: [['after','input','line 09','line 9'],['WHILE','pre-condition','REPEAT','post-condition'],['check','validate','between','1','500','range','inclusive'],['error message','not in range','re-enter','re-input','another input']], anyOf: 4 }
      ]},
      { num: 5, topic: 'CASE Statement', parts: [
        { label: '', marks: 5, type: 'short', question: 'Write pseudocode to:\n• accept input of a whole number from 1 to 4 inclusive\n• use a CASE statement to output the number entered\n• output the word "ERROR" if a number from 1 to 4 was not entered.', keywords: [['INPUT','Number'],['CASE','OF','ENDCASE'],['1','2','3','4','branches'],['OTHERWISE'],['OUTPUT','ERROR']], anyOf: 5 }
      ]},
      { num: 6, topic: 'Flowchart Trace & Algorithm', parts: [
        { label: 'a', marks: 7, type: 'long', question: 'The flowchart on the question paper represents a sorting algorithm. Input data: 7, 47, 50, 52, 60, 80, 63, 70.\n\nDescribe what the algorithm does step by step. Include details about the sorting method, number of passes, comparisons made, and the final output. Explain what Result, Flag and Swap variables are used for.', keywords: [['bubble sort','sorting'],['ascending','order'],['compare','adjacent','Numbers[Count]','Numbers[Count+1]'],['swap','exchange','Swap variable'],['Flag','TRUE','FALSE','sorted'],['pass','iteration','outer loop'],['median','middle','Result','Limit DIV 2','output']], anyOf: 7 },
        { label: 'b', marks: 3, type: 'short', question: 'Outline the processes involved in the algorithm shown in the flowchart.', keywords: [['input','store','array','numbers','set','list'],['sorted','bubble sort','ascending','order'],['middle','median','found','output','displayed']], anyOf: 3 }
      ]},
      { num: 7, topic: 'File Storage & String Operations', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Outline why it is useful to store data in a file.', keywords: [['permanent','prevents loss','persistent','not lost','saved'],['recalled','used again','another program','reused','transferred','elsewhere']], anyOf: 2 },
        { label: 'b', marks: 4, type: 'short', question: 'The function LENGTH(X) calculates the length of a string X.\n\nWrite pseudocode to:\n• read the contents of the text file Quotation.txt into an appropriate string variable\n• output the string in upper case and the length of the string.', keywords: [['DECLARE','STRING','string variable'],['OPENFILE','READ','Quotation.txt'],['READFILE','string','Words'],['UCASE','upper case','LENGTH','output'],['CLOSEFILE']], anyOf: 4 }
      ]},
      { num: 8, topic: 'Logic Circuit & Truth Table', parts: [
        { label: 'a', marks: 5, type: 'long', question: 'Consider the logic expression: Z = (R OR NOT T) XOR (NOT S AND T)\n\nDescribe how to draw a logic circuit for this expression. Each logic gate must have a maximum of two inputs. Do not simplify the expression. Identify the gates needed and how they connect.', keywords: [['NOT','NOT gate','inverter'],['OR','OR gate'],['AND','AND gate'],['XOR','XOR gate'],['R','S','T','inputs','connect']], anyOf: 5 },
        { label: 'b', marks: 4, type: 'short', question: 'Complete the truth table for Z = (R OR NOT T) XOR (NOT S AND T). Give the Z values for all 8 rows (R,S,T from 000 to 111).', keywords: [['1','1','1','0','1','0','1','1'],['11101011']], anyOf: 1 }
      ]},
      { num: 9, topic: 'Databases & SQL', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'A database table SoftDrinks stores details of soft drinks. State whether any field is suitable as a primary key and give a reason for your answer.', keywords: [['none','no','not suitable'],['not unique','no unique','duplicate']], anyOf: 1 },
        { label: 'b', marks: 5, type: 'fillblank', question: 'Complete the SQL statement to return the number of cans the shop has in stock.\n\nSELECT _____(_____) FROM _____ WHERE _____ = _____;',
          blanks: [
            { id: 'a', prompt: 'SELECT', answer: 'SUM', keywords: [['SUM','sum']] },
            { id: 'b', prompt: '( )', answer: 'NumberInStock', keywords: [['NumberInStock','numberinstock']] },
            { id: 'c', prompt: 'FROM', answer: 'SoftDrinks', keywords: [['SoftDrinks','softdrinks']] },
            { id: 'd', prompt: 'WHERE', answer: 'Container', keywords: [['Container','container']] },
            { id: 'e', prompt: '=', answer: "'Can'", keywords: [["'Can'","'can'","Can","can","'Can'"]] }
          ]
        }
      ]},
      { num: 10, topic: 'Programming Task — Cricket Club Statistics', parts: [
        { label: '', marks: 15, type: 'long', question: 'Write a program to manage cricket club statistics for 12 clubs.\n\nRequirements:\n• Input and validate number of matches played (max 22)\n• Input club names into Clubs[] array\n• For each club, input wins, draws, losses into Statistics[,] 2D array\n• Validate wins+draws+losses = matches played\n• Calculate points (win=12, draw=5, loss=0) into Points[]\n• Find club(s) with highest points\n• Output winner name(s), number of wins, and total points\n\nUse pseudocode or program code with comments.', keywords: [['input','prompt','enter'],['validate','validation','check','REPEAT','UNTIL','WHILE'],['FOR','loop','1 TO 12','iteration','Counter'],['array','Clubs','Statistics','Points','TieIndex'],['calculate','points','*','12','5','win','draw'],['maximum','highest','max','compare','find'],['output','display','print','winner','name']], anyOf: 8 }
      ]}
    ]
  },

  // ========== SPECIMEN PAPERS ==========

  '0478_1A_sp23': {
    id: '0478_1A_sp23',
    subject: 'Computer Science',
    code: '0478/01',
    paper: 'Paper 1A',
    name: 'Computer Systems (Specimen)',
    description: 'Specimen practice for Computer Systems — data representation, networking, hardware, and security.',
    type: 'specimen',
    session: 'Specimen 2023',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Hexadecimal & Binary', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Part of a MAC address is given: 97–5C–E1\nEach pair of digits is stored as binary in an 8-bit register.\nComplete the binary register for these two pairs of digits.\n97 = _______\n5C = _______', keywords: [['10010111'],['01011100']], anyOf: 2 },
        { label: 'b', marks: 4, type: 'long', question: 'Describe what is meant by a MAC address.', keywords: [['identify','identifies','device','network','NIC','interface'],['unique','unique address'],['static','does not change','fixed'],['manufacturer','set by manufacturer'],['serial','serial number','ID','manufacturer ID']], anyOf: 4 },
        { label: 'c', marks: 2, type: 'short', question: 'Give two other uses of hexadecimal in computer science.', keywords: [['colour codes','colour','HTML','CSS'],['error messages','error code'],['memory locations','memory address'],['memory dump','debugging'],['IPv6','IP address'],['ASCII','Unicode'],['assembly language','machine code'],['URL']], anyOf: 2 },
        { label: 'd(i)', marks: 1, type: 'short', question: 'The binary value 01010010 undergoes a logical left shift of two places.\nGive the 8-bit binary result.', keywords: [['01001000']], anyOf: 1 },
        { label: 'd(ii)', marks: 1, type: 'short', question: 'State one effect this logical shift has on the binary value.', keywords: [['multiply','multiplied','multiplication'],['4','four','2^2']], anyOf: 1 },
        { label: 'e', marks: 2, type: 'short', question: 'Complete the binary register for the denary value −54 using two\'s complement. Show your working.', keywords: [['flip','invert','complement','11001001'],['add 1','+1','11001010']], anyOf: 2 }
      ]},
      { num: 2, topic: 'Data Packets & Transmission', parts: [
        { label: 'a', marks: 4, type: 'long', question: 'The website data is broken down into packets to be transmitted to a user.\nDescribe the structure of a data packet.', keywords: [['header','destination address','packet number','originator address'],['payload','data','body'],['trailer','end of packet','error check']], anyOf: 3 },
        { label: 'b(i)', marks: 1, type: 'mcq', question: 'Videos are compressed before upload. Tick one box to show which statement is a benefit of compressing the videos.', options: ['A: Data is encrypted.', 'B: Duration of each video will be reduced.', 'C: Less storage space on the web server is required.', 'D: More bandwidth is required when viewing the videos.'], answer: 2 },
        { label: 'b(ii)', marks: 2, type: 'short', question: 'Give two methods of compression that could be used to compress the videos.', keywords: [['lossy'],['lossless']], anyOf: 2 },
        { label: 'b(iii)', marks: 4, type: 'long', question: 'The company uses parallel half-duplex data transmission to transmit data for new videos to the web server.\nExplain why parallel half-duplex data transmission is the most appropriate method.', keywords: [['parallel','fastest','fast','multiple bits','simultaneously'],['large amount of data','big files','video data'],['upload and download','both directions','half-duplex'],['not at same time','not simultaneously'],['short distance','not long distance'],['skewing','skew','not a problem']], anyOf: 4 },
        { label: 'c(i)', marks: 4, type: 'long', question: 'Describe what is meant by a Distributed Denial of Service (DDoS) attack.', keywords: [['multiple computers','bots','many computers','botnet'],['deny','denial','prevent','access'],['large number of requests','numerous requests','flood'],['same time','simultaneously'],['server unable','server fails','overwhelmed','cannot respond'],['times out','crash','unavailable']], anyOf: 4 },
        { label: 'c(ii)', marks: 1, type: 'short', question: 'Suggest one security device that can be used to help prevent a DDoS attack.', keywords: [['firewall'],['proxy server','proxy']], anyOf: 1 }
      ]},
      { num: 3, topic: 'IP Addressing & URLs', parts: [
        { label: 'a(i)', marks: 3, type: 'short', question: 'Give three characteristics of an IP address.', keywords: [['0-255','0-FFF','values','numbers'],['separated','full stops','colons'],['unique','unique address'],['static or dynamic','can change'],['public or private'],['IPv4','four groups'],['IPv6','eight groups','::']], anyOf: 3 },
        { label: 'a(ii)', marks: 1, type: 'short', question: 'Identify the network component that uses the IP address to send data only to its correct destination.', keywords: [['router']], anyOf: 1 },
        { label: 'b', marks: 3, type: 'short', question: 'Identify the name of each section of this URL:\nhttps://www.cambridgeassessment.org.uk/index.html\n\nhttps = _______\ncambridgeassessment.org.uk = _______\n/index.html = _______', keywords: [['protocol'],['domain name','domain'],['web page','file name','webpage','page']], anyOf: 3 }
      ]},
      { num: 4, topic: 'CPU & Von Neumann Architecture', parts: [
        { label: 'a', marks: 3, type: 'choosethree', question: 'Circle three components that are part of the central processing unit (CPU).\n\naccumulator (ACC) | hard disk drive (HDD) | memory address register (MAR) | program counter (PC) | random access memory (RAM) | read only memory (ROM) | sensor | solid state drive (SSD)', correctIndices: [0, 2, 3], options: ['accumulator (ACC)','hard disk drive (HDD)','memory address register (MAR)','program counter (PC)','random access memory (RAM)','read only memory (ROM)','sensor','solid state drive (SSD)'] },
        { label: 'b', marks: 2, type: 'short', question: 'Describe the purpose of the control unit (CU) within this computer.', keywords: [['control signals','send signals','manage','coordinate'],['transfer of data','data and instructions','decode','instruction set']], anyOf: 2 },
        { label: 'c(i)', marks: 1, type: 'short', question: 'State one purpose of a core in a CPU.', keywords: [['process','instruction','execute','fetch-execute','fetch-decode-execute']], anyOf: 1 },
        { label: 'c(ii)', marks: 2, type: 'short', question: 'The computer is upgraded to a dual core CPU.\nExplain how the upgrade can affect the performance of the computer.', keywords: [['two instructions','simultaneously','parallel','at same time','multiple'],['increasing','improve','faster','better performance']], anyOf: 2 },
        { label: 'd', marks: 1, type: 'mcq', question: 'Tick one box to show the part of a computer of which the bootstrap is an example.', options: ['A: application software', 'B: firmware', 'C: hard disk drive', 'D: MAC address'], answer: 1 }
      ]},
      { num: 5, topic: 'High-Level Languages & IDEs', parts: [
        { label: 'a(i)', marks: 2, type: 'short', question: 'Identify two advantages to the programmer of using a high-level language instead of a low-level language.', keywords: [['easier','quicker','read','write','understand','code'],['easier','quicker','debug'],['portable','cross-platform','portability']], anyOf: 2 },
        { label: 'a(ii)', marks: 1, type: 'short', question: 'Suggest one disadvantage to the programmer of using a high-level language instead of a low-level language.', keywords: [['not able to directly manipulate hardware','no direct hardware access'],['wait for translation','slower','compilation','interpretation'],['less efficient','larger','more memory']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'short', question: 'State what is meant by an IDE.', keywords: [['software','program'],['useful functions','tools','features','programmer','writing','developing','programming']], anyOf: 1 }
      ]},
      { num: 6, topic: 'Robotics', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'One characteristic of a robot is its mechanical structure.\nState two other characteristics of a robot.', keywords: [['electrical','electronic','components'],['programmable','programmed','can be programmed']], anyOf: 2 },
        { label: 'b', marks: 2, type: 'short', question: 'Suggest two advantages of using robots, instead of humans, to build cars in the factory.', keywords: [['efficient','efficiency','faster'],['accurate','accuracy','precise'],['lift larger','heavier','stronger'],['dangerous','safe','safety','environment'],['cost','wages','running costs','cheaper'],['consistent','consistency'],['24/7','24 hours','no breaks','continuous']], anyOf: 2 }
      ]},
      { num: 7, topic: 'Character Sets', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Describe what is meant by a character set.', keywords: [['all characters','symbols','letters','numbers'],['represented','represent','computer','system'],['unique value','unique code','binary','assigned']], anyOf: 2 },
        { label: 'b', marks: 1, type: 'short', question: 'One disadvantage of using Unicode instead of ASCII is that the text takes up more storage space.\nGive one reason why it takes up more storage space.', keywords: [['more bits','more bytes','encoded using more','larger','each character','per character']], anyOf: 1 }
      ]},
      { num: 8, topic: 'Virtual Memory', parts: [
        { label: 'a', marks: 4, type: 'long', question: 'Draw a diagram to represent how virtual memory is created and used.\nYour diagram should show: hard drive, virtual memory partition, RAM, and transfer of pages between them.', keywords: [['hard drive','hard disk','HDD'],['partitioned','partition','virtual memory','portion'],['RAM','physical memory','main memory'],['pages','transfer','swapped','moved','between']], anyOf: 4 },
        { label: 'b', marks: 3, type: 'long', question: 'A student uses software to create 3D models. This process often requires the use of virtual memory.\nExplain why virtual memory is needed for this process.', keywords: [['extend','RAM capacity','more memory','additional memory'],['freezing','crashing','RAM full','stop'],['large amount of data','3D modelling','processing','process']], anyOf: 3 }
      ]},
      { num: 9, topic: 'Encryption', parts: [
        { label: '', marks: 5, type: 'fillblank', question: 'Complete the sentences about symmetric encryption using terms from the list.\n\nWord bank: algorithm | cipher | copied | delete | key | plain | private | public | standard | stolen | understood | unreadable\n\nSome terms will not be used. Use each term only once.',
          blanks: [
            { id: 'a', prompt: 'The data before encryption is known as __________ text.', answer: 'plain', keywords: [['plain']] },
            { id: 'b', prompt: 'To scramble the data, an encryption __________, which is a type of', answer: 'algorithm', keywords: [['algorithm']] },
            { id: 'c', prompt: '__________, is used.', answer: 'key', keywords: [['key']] },
            { id: 'd', prompt: 'The data after encryption is known as __________ text.', answer: 'cipher', keywords: [['cipher']] },
            { id: 'e', prompt: 'Encryption prevents the data from being __________ by a hacker.', answer: 'understood', keywords: [['understood']] }
          ]
        }
      ]},
      { num: 10, topic: 'SSL & Secure Connections', parts: [
        { label: '', marks: 6, type: 'long', question: 'An art gallery uses Secure Socket Layer (SSL) to provide a secure connection when selling art on its website.\nDescribe the process of SSL and explain how it provides a secure connection.', keywords: [['protocol','security protocol'],['encrypts','encryption','encrypt','data','secure'],['digital certificates','certificates','certificate'],['browser','user','client','requested'],['public key','key','contains','gallery'],['authenticate','authentication','verify','identity'],['transaction','begin','start','proceed']], anyOf: 6 }
      ]}
    ]
  },

  '0478_1B_sp23': {
    id: '0478_1B_sp23',
    subject: 'Computer Science',
    code: '0478/01',
    paper: 'Paper 1B',
    name: 'Computer Systems (Specimen B)',
    description: 'Specimen practice for Computer Systems — logic, CPU architecture, system software, and compression.',
    type: 'specimen',
    session: 'Specimen 2023',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Binary Number System', parts: [
        { label: 'a(i)', marks: 1, type: 'mcq', question: 'Which 8-bit binary value is the correct conversion for the denary value 50?', options: ['A: 00101010', 'B: 00110010', 'C: 01001100', 'D: 01010000'], answer: 1 },
        { label: 'a(ii)', marks: 1, type: 'mcq', question: 'Which 8-bit binary value is the correct conversion for the hexadecimal value 90?', options: ['A: 00001001', 'B: 01011010', 'C: 10010000', 'D: 01100100'], answer: 2 },
        { label: 'b', marks: 2, type: 'short', question: 'Explain why a computer system can only process data in binary form.', keywords: [['logic gates','transistors','switches','two states'],['0','1','on','off','two states']], anyOf: 2 },
        { label: 'c', marks: 3, type: 'short', question: 'Add the two 8-bit binary values:\n  00111001\n+ 01001010\nGive your answer in binary. Show all your working.', keywords: [['10000011']], anyOf: 1 },
        { label: 'd', marks: 3, type: 'short', question: 'Two 8-bit binary values are added. The denary result is 301. This generates an error.\nState the name of this type of error and explain why this error occurs.', keywords: [['overflow','overflow error'],['larger than 255','exceeds 255','cannot fit in 8 bits','too large for register']], anyOf: 2 }
      ]},
      { num: 2, topic: 'Parity & Error Detection', parts: [
        { label: '', marks: 3, type: 'short', question: 'Three binary registers are transmitted using even parity. After transmission:\n• No errors detected in Register A and Register C\n• An error detected in Register B\n\nDetermine the correct parity bit for each register:\nRegister A: 0 1 0 0 1 0 1 [?]\nRegister B: 1 0 0 0 0 0 1 [?]\nRegister C: 1 0 0 0 0 1 1 [?]', keywords: [['1','Register A 1','A=1'],['0','Register B 0','B=0'],['1','Register C 1','C=1']], anyOf: 3 }
      ]},
      { num: 3, topic: 'CPU & Embedded Systems', parts: [
        { label: 'a', marks: 5, type: 'long', question: 'Describe how the MDR and the ALU are used in the fetch–decode–execute cycle.', keywords: [['fetched','RAM','memory','data','MDR','store'],['ALU','execute','calculation','logical','operations'],['built-in register','register','ACC','accumulator','interim results','temporary'],['send','MDR','after calculation','back','data','results'],['written','RAM','send from MDR','store back']], anyOf: 5 },
        { label: 'b', marks: 2, type: 'short', question: 'Describe what is meant by an embedded system.', keywords: [['built into','inside','device','part of'],['single purpose','dedicated','limited function','specific'],['firmware','runs on firmware'],['no peripherals','no additional','limited']], anyOf: 2 },
        { label: 'c', marks: 1, type: 'short', question: 'State one reason why both the laptop and calculator have ROM.', keywords: [['boot-up','bootstrap','boot','startup','instructions'],['not deleted','permanent','retained','non-volatile']], anyOf: 1 }
      ]},
      { num: 4, topic: 'Security Threats & Solutions', parts: [
        { label: 'a', marks: 3, type: 'short', question: 'Identify a security solution for each threat (each solution must be different):\n• Computer virus\n• Hacking\n• Spyware', keywords: [['anti-malware','anti-virus','antivirus','firewall'],['firewall','passwords','biometrics','two-step verification'],['anti-malware','anti-spyware','antispyware','two-step verification','firewall']], anyOf: 3 },
        { label: 'b', marks: 6, type: 'long', question: 'Describe how each security solution you identified in part (a) helps protect the computer.', keywords: [['scans','scan','checks','detect','viruses'],['record','known','database','definition'],['removes','quarantines','delete','isolate'],['monitors','traffic','incoming','outgoing','network'],['criteria','rules','blacklist','whitelist','allow','block'],['password','strong','change','regularly','lock','brute','force','biometric','unique','two-step','verification']], anyOf: 6 }
      ]},
      { num: 5, topic: 'Programming Languages & IDEs', parts: [
        { label: 'a', marks: 6, type: 'fillblank', question: 'Complete the statements about programming languages using terms from the list.\n\nWord bank: assembly | denary | executable file | instruction | storage | hexadecimal | high-level | low-level | machine code | protocol | source code | style | syntax | translator\n\nSome terms will not be used.',
          blanks: [
            { id: 'a', prompt: 'The structure of language statements is called the __________.', answer: 'syntax', keywords: [['syntax']] },
            { id: 'b', prompt: 'A language using natural language statements is called a __________ language.', answer: 'high-level', keywords: [['high-level','high level']] },
            { id: 'c', prompt: 'Programs need a __________ to convert them into', answer: 'translator', keywords: [['translator']] },
            { id: 'd', prompt: '__________.', answer: 'machine code', keywords: [['machine code','machinecode']] },
            { id: 'e', prompt: 'A language written using mnemonic codes is called an __________ language.', answer: 'assembly', keywords: [['assembly']] },
            { id: 'f', prompt: 'This is an example of a __________ language.', answer: 'low-level', keywords: [['low-level','low level']] }
          ]
        },
        { label: 'b', marks: 3, type: 'short', question: 'Give three common functions of an IDE.', keywords: [['code editor','editor'],['run-time environment','run time','runtime'],['translator','compiler','interpreter'],['error diagnostics','debugging','debug'],['auto-completion','autocomplete','auto completion'],['auto-correction','autocorrect'],['prettyprinting','pretty print','formatting']], anyOf: 3 }
      ]},
      { num: 6, topic: 'Cloud Storage & Virtual Memory', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Describe what is meant by cloud storage.', keywords: [['servers','remote','data centers','storage'],['remote location','off-site','not local'],['third-party','company','maintained','backed up'],['internet','network','accessed online']], anyOf: 2 },
        { label: 'b(i)', marks: 1, type: 'short', question: 'One example of primary storage is ROM.\nGive one other example of primary storage.', keywords: [['RAM']], anyOf: 1 },
        { label: 'b(ii)', marks: 2, type: 'short', question: 'Give two examples of secondary storage.', keywords: [['HDD','hard disk','hard drive'],['SSD','solid state'],['CD','DVD','Blu-ray','optical'],['USB','flash','memory stick']], anyOf: 2 },
        { label: 'c', marks: 4, type: 'long', question: 'Describe how virtual memory is created and used.', keywords: [['hard drive','hard disk','HDD','partitioned','partition'],['RAM','physical memory','full'],['pages','data','blocks','not required','currently not needed'],['transferred','moved','swapped','RAM to virtual'],['back','required again','virtual to RAM','swapped back']], anyOf: 4 }
      ]},
      { num: 7, topic: 'Operating System & Interrupts', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'In a computer system the operating system is run directly on the firmware.\nIdentify which type of software runs directly on the operating system.', keywords: [['application','application software','apps']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Give two examples of when an interrupt would be generated.', keywords: [['division by zero','divide by zero','division','error'],['two processes','same memory','memory location','access'],['error message','error'],['change of task','task switch','key press','mouse','printer','I/O']], anyOf: 2 }
      ]},
      { num: 8, topic: 'Digital Currency & Blockchain', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'State what is meant by a digital currency.', keywords: [['electronic','only electronic','digital','exists only'],['form','currency','money']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Describe the process of blockchain in digital currency.', keywords: [['ledger','record','log'],['tracking','track','each transaction','transaction'],['time-stamped','time stamped','series','records'],['cannot be altered','immutable','unchangeable','permanent']], anyOf: 2 }
      ]},
      { num: 9, topic: 'Lossless Compression', parts: [
        { label: '', marks: 5, type: 'long', question: 'The following data is stored as a text file:\nred, green, yellow, green, purple, blue, red, purple, blue, yellow, grey, black, pink, red\n\nExplain how lossless compression would compress this file.', keywords: [['algorithm','method','process','technique'],['no data removed','original','can be restored','no loss'],['repeated','patterns','words','symbols','identified','find'],['indexed','table','dictionary','index','stored'],['replaced','replace','index','reference','pointer'],['positions','stored','number of times','count','frequency']], anyOf: 5 }
      ]},
      { num: 10, topic: 'Expert Systems & Machine Learning', parts: [
        { label: 'a', marks: 3, type: 'short', question: 'An expert system is an example of artificial intelligence. One component is a knowledge base.\nExplain why an expert system needs a knowledge base.', keywords: [['facts','data','information','knowledge'],['generate','rules','create rules'],['decisions','decision making','reasoning','conclusions']], anyOf: 3 },
        { label: 'b', marks: 3, type: 'short', question: 'Identify three other components that are present in an expert system (besides the knowledge base).', keywords: [['rule base','rules'],['inference engine','inference','engine'],['interface','user interface']], anyOf: 3 },
        { label: 'c', marks: 1, type: 'short', question: 'State what is meant by machine learning.', keywords: [['adapt','learns','ability to learn','automatically'],['own processes','data','experience','patterns']], anyOf: 1 }
      ]},
      { num: 11, topic: 'Automated Systems — Sensors & Microprocessors', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'An automated lighting system uses movement detection. When movement is detected, lights switch on. If no movement for 2 minutes, lights switch off.\nIdentify the most appropriate sensor for this system.', keywords: [['infrared','IR','infrared sensor','PIR','motion sensor','movement sensor']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Describe what is meant by a microprocessor.', keywords: [['integrated circuit','IC','chip','type of circuit'],['single chip','one chip','contained on a chip']], anyOf: 2 },
        { label: 'c', marks: 6, type: 'long', question: 'Describe how the sensor and the microprocessor are used in this automated lighting system.', keywords: [['sensor','sends','sends data','signal','detects movement'],['analogue to digital','ADC','converted','digital','convert'],['compared','stored value','compare','check'],['outside range','matches','within','detected'],['signal','send signal','switch','lights on','light on'],['actuator','switch','turn on','turn off'],['timer','2 minutes','set timer','reset','timeout','continuous']], anyOf: 6 }
      ]}
    ]
  },

  '0478_2A_sp23': {
    id: '0478_2A_sp23',
    subject: 'Computer Science',
    code: '0478/02',
    paper: 'Paper 2A',
    name: 'Algorithms, Programming and Logic (Specimen)',
    description: 'Specimen practice for Algorithms & Programming — pseudocode, flowcharts, logic circuits, and validation.',
    type: 'specimen',
    session: 'Specimen 2023',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Pseudocode Statements', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Match each pseudocode description to the most appropriate pseudocode statement:\n\n1. a loop that will always iterate at least once\n2. a conditional statement to deal with many possible outcomes\n3. a loop that will always iterate a set number of times\n4. a conditional statement with different outcomes for true and false\n\nStatements: FOR…TO…NEXT, IF…THEN…ELSE…ENDIF, WHILE…DO…ENDWHILE, CASE…OF…OTHERWISE…ENDCASE, REPEAT…UNTIL\n\nNot all will be used. Give your four matches.', keywords: [['REPEAT','UNTIL','REPEAT UNTIL'],['CASE','OF','OTHERWISE','ENDCASE'],['FOR','TO','NEXT','FOR TO NEXT'],['IF','THEN','ELSE','ENDIF']], anyOf: 4 },
        { label: 'b', marks: 3, type: 'short', question: 'Using a single loop, write an algorithm in pseudocode to output 50 names stored in the array Name[].', keywords: [['WHILE','FOR','loop'],['Count','index','counter','< 50','<= 49','1 TO 50'],['OUTPUT','Name','array','element','Name[Count]'],['Count','increment','+ 1']], anyOf: 3 }
      ]},
      { num: 2, topic: 'Validation & Verification', parts: [
        { label: '', marks: 4, type: 'long', question: 'Describe the purpose of validation and verification checks during data entry. Include an example for each.\n\nValidation check:\nVerification check:', keywords: [['possible','reasonable','sensible','validation'],['range check','length check','type','format','example'],['same','intended','matches','verification'],['double entry','visual check','example','enter twice']], anyOf: 4 }
      ]},
      { num: 3, topic: 'Subroutines', parts: [
        { label: '', marks: 1, type: 'mcq', question: 'Tick one box to show the named section of a program that performs a specific task.', options: ['A: file', 'B: function', 'C: parameter', 'D: process'], answer: 1 }
      ]},
      { num: 4, topic: 'Structure Diagrams', parts: [
        { label: '', marks: 4, type: 'long', question: 'Part of a satellite navigation system:\n• allows the user to enter details for a new destination or select a previously saved destination\n• displays directions in the form of a visual map or as a list\n\nDraw a structure diagram for this part of the satellite navigation system. Describe the hierarchical structure with sub-systems, inputs, and outputs.', keywords: [['hierarchical','hierarchy','levels','tree'],['sub-systems','sub systems','modules'],['input','destination','new','saved'],['output','directions','map','list','display']], anyOf: 4 }
      ]},
      { num: 5, topic: 'Pseudocode Error Correction', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Identify four errors in this pseudocode and suggest corrections:\n\nINPUT Number\nWHILE Numbers <> 999 DO\n  IF Number > 100\n    THEN\n      OUTPUT Number\n  ENDIF\nENDWHILE\nOUTPUT Number', keywords: [['Numbers','Number','variable name','Numbers should be Number'],['>','>=','greater or equal','>= 100','100 inclusive'],['INPUT','input inside','missing input inside loop','INPUT Number inside loop'],['final output','remove','delete','last OUTPUT','unnecessary']], anyOf: 4 },
        { label: 'b', marks: 2, type: 'short', question: 'Write a pseudocode statement to change the corrected algorithm to output all numbers between 100 and 200 inclusive.', keywords: [['AND','IF','>=','100','AND','200','<='],['nested','IF','100','200']], anyOf: 2 }
      ]},
      { num: 6, topic: 'Logic Circuits & Truth Tables', parts: [
        { label: 'a', marks: 4, type: 'long', question: 'Draw a logic circuit for the expression: X = (A AND B) OR (B AND NOT C). Each gate must have a maximum of 2 inputs. Do not simplify.', keywords: [['AND','AND gate','A','B'],['NOT','NOT gate','inverter','C'],['AND','AND gate','B','NOT C'],['OR','OR gate','combine','final output']], anyOf: 4 },
        { label: 'b', marks: 4, type: 'short', question: 'Complete the truth table for X = (A AND B) OR (B AND NOT C). Give the X values for all 8 rows.', keywords: [['0','0','1','0','0','0','1','1'],['00100011']], anyOf: 1 }
      ]},
      { num: 7, topic: 'Flowchart Trace & Bubble Sort', parts: [
        { label: 'a', marks: 5, type: 'short', question: 'The flowchart represents a sorting algorithm. Array Name[1:4] contains: Jamal, Amir, Eve, Tara.\nComplete the trace. What are the final values of Name[1], Name[2], Name[3], Name[4] after the algorithm completes?', keywords: [['Amir','Name[1]','first'],['Eve','Name[2]','second'],['Jamal','Name[3]','third'],['Tara','Name[4]','fourth']], anyOf: 4 },
        { label: 'b', marks: 2, type: 'short', question: 'Describe what the algorithm represented by the flowchart is doing.', keywords: [['bubble sort','sort','sorting'],['ascending','A to Z','alphabetical','lowest to highest']], anyOf: 2 }
      ]},
      { num: 8, topic: 'Test Data', parts: [
        { label: '', marks: 3, type: 'short', question: 'A programmer has written an algorithm to check that prices are less than $10.00.\nTest data: 10.00, 9.99, ten\n\nState why each value was chosen as test data.\n10.00:\n9.99:\nten:', keywords: [['boundary','abnormal','out of range','rejected','boundary test','>= 10','exactly 10'],['boundary','extreme','normal','accepted','within range','< 10','highest valid'],['abnormal','wrong type','rejected','string','not numeric','incorrect']], anyOf: 3 }
      ]},
      { num: 9, topic: 'File Storage', parts: [
        { label: '', marks: 3, type: 'short', question: 'Explain why a program might need to store data in a file.', keywords: [['not lost','permanent','persist','switched off','saved','retained'],['more than one program','reused','another program','run again','shared'],['backed up','archived','backup'],['transported','another place','transferred','different system']], anyOf: 3 }
      ]},
      { num: 10, topic: 'Functions & Parameters', parts: [
        { label: '', marks: 1, type: 'mcq', question: 'FUNCTION ConvertToCm(Inches: REAL) RETURNS REAL\n  RETURN Inches * 2.4\nENDFUNCTION\n\nTick one box which accurately describes the use of the variable Inches.', options: ['A: answer', 'B: call', 'C: parameter', 'D: response'], answer: 2 }
      ]},
      { num: 11, topic: 'Databases & SQL', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'A database table 2018MOV has 20 records. State the number of records.', keywords: [['20','twenty']], anyOf: 1 },
        { label: 'b(i)', marks: 1, type: 'short', question: 'Give the name of the field that would be used for the primary key.', keywords: [['CatNo','catno']], anyOf: 1 },
        { label: 'b(ii)', marks: 1, type: 'short', question: 'State the reason for choosing this field for the primary key.', keywords: [['unique','unique identifier','unique value']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'State the most appropriate data type for each field: CatNo, Title, Genre1, Streaming.', keywords: [['text','string'],['text','string'],['text','string'],['boolean','text','yes/no']], anyOf: 4 },
        { label: 'd', marks: 2, type: 'short', question: 'Complete the SQL statement to return the category number and title for all Comedy movies.\nSELECT CatNo, Title\n_____ 2018MOV\nWHERE Genre1 = _____;', keywords: [['FROM'],["'Comedy'","Comedy","'comedy'","comedy"]], anyOf: 2 }
      ]},
      { num: 12, topic: 'String Operations & Pseudocode', parts: [
        { label: 'a', marks: 3, type: 'short', question: 'Declare variables X (string), Y (position in string), Z (number of characters).', keywords: [['DECLARE','X','STRING'],['DECLARE','Y','INTEGER'],['DECLARE','Z','INTEGER']], anyOf: 3 },
        { label: 'b', marks: 6, type: 'short', question: 'Using LENGTH(X) and SUBSTRING(X,Y,Z):\n• store "Programming is fun" in X\n• find and output the length\n• extract the word "fun" from the string and output it', keywords: [['"Programming is fun"','Programming is fun','string','store','X'],['LENGTH','length','OUTPUT','16'],['SUBSTRING','substring','16','3','Y','Z','fun']], anyOf: 4 }
      ]},
      { num: 13, topic: 'Programming Task — Student Grades', parts: [
        { label: '', marks: 15, type: 'long', question: 'Write a program for student grades using StudentName[] (1D) and StudentMark[,] (2D) arrays. ClassSize and SubjectNo store the number of students and subjects.\n\nGrade thresholds:\n• >= 70: distinction\n• >= 55: merit\n• >= 40: pass\n• < 40: fail\n\nRequirements:\n1. Calculate combined total mark for each student\n2. Calculate average mark for each student (rounded to nearest whole number)\n3. Output for each student: name, combined total, average, grade\n4. Count and output number of distinctions, merits, passes, fails\n\nUse pseudocode or program code with comments.', keywords: [['FOR','loop','ClassSize','iteration','student'],['TotalMark','total','sum','add','+'],['average','AverageMark','divide','SubjectNo','ROUND'],['IF','THEN','ELSE','>=','70','55','40','grade','selection'],['count','DistinctionNo','MeritNo','PassNo','FailNo','counter'],['OUTPUT','name','total','average','grade','count']], anyOf: 8 }
      ]}
    ]
  },

  '0478_2B_sp23': {
    id: '0478_2B_sp23',
    subject: 'Computer Science',
    code: '0478/02',
    paper: 'Paper 2B',
    name: 'Algorithms, Programming and Logic (Specimen B)',
    description: 'Specimen practice for Algorithms & Programming — procedures, arrays, database queries, and logic gates.',
    type: 'specimen',
    session: 'Specimen 2023',
    duration: 105,
    totalMarks: 75,
    questions: [
      { num: 1, topic: 'Range Check', parts: [
        { label: '', marks: 1, type: 'mcq', question: 'A range check is used to check that a value input is above 10 and below 20.\nTick one box to show which value would be accepted.', options: ['A: 10', 'B: 15', 'C: 20', 'D: 30'], answer: 1 }
      ]},
      { num: 2, topic: 'Programming Concepts', parts: [
        { label: '', marks: 3, type: 'short', question: 'Match each programming concept to its description:\n\nConcepts: Library routine, Structure diagram, Procedure, Function\n\nDescriptions:\nA. A subroutine that may not return a value\nB. A standard subroutine that is available for immediate use\nC. A subroutine that can be used in an assignment statement\nD. An overview of a program or subroutine\n\nGive your three matches.', keywords: [['procedure','A','may not return'],['library routine','B','standard','available'],['function','C','assignment','returns'],['structure diagram','D','overview','structure']], anyOf: 3 }
      ]},
      { num: 3, topic: 'Test Data', parts: [
        { label: '', marks: 4, type: 'short', question: 'A program checks if the weight of a baby is at least 2 kilograms.\nGive, with reasons, two different values of test data that could be used. Each reason must be different.\n\nValue 1:\nReason:\nValue 2:\nReason:', keywords: [['2','boundary','boundary test','should be accepted','normal','at least'],['1','abnormal','erroneous','should be rejected','below','under'],['two','wrong type','should be rejected','string']], anyOf: 4 }
      ]},
      { num: 4, topic: 'File Handling', parts: [
        { label: 'a', marks: 2, type: 'choosethree', question: 'Circle the two actions that a program needs to take to store data in a file.\n\nactivate | calculate | close | open | output | print | read | search | sort | write', correctIndices: [2, 9], options: ['activate','calculate','close','open','output','print','read','search','sort','write'] },
        { label: 'b', marks: 2, type: 'short', question: 'A program halted unexpectedly with the error "File not found" whilst trying to read data from a file.\nOutline the actions the program needs to take to prevent this error.', keywords: [['before','prior','attempt','try','opening'],['check','file exists','exist','check if'],['error message','message','warn','suitable','output']], anyOf: 2 }
      ]},
      { num: 5, topic: 'Flowchart Design', parts: [
        { label: 'a', marks: 6, type: 'long', question: 'Draw a flowchart for an algorithm to:\n• allow numbers to be input\n• ignore any numbers that are negative\n• count how many numbers are positive\n• output the count of positive numbers when zero is input and end the algorithm\n\nDescribe the flowchart symbols, flowlines, and decision points needed.', keywords: [['input','number','enter'],['check','decision','= 0','zero'],['check','decision','< 0','negative','ignore'],['count','counter','increment','+ 1','positive'],['output','display','count','positive numbers'],['flowlines','arrows','symbols','START','STOP']], anyOf: 6 },
        { label: 'b', marks: 2, type: 'short', question: 'Explain the changes you would make to your algorithm to also count the negative numbers.', keywords: [['another counter','second counter','negative counter','new variable'],['output','both counters','at end','negative count']], anyOf: 2 }
      ]},
      { num: 6, topic: 'Pseudocode Error Correction', parts: [
        { label: '', marks: 4, type: 'short', question: 'Identify four errors in this pseudocode that inputs 80 numbers between 100 and 1000:\n\n01 Count ← 0\n02 FOR Index ← 1 TO 80\n03     OUTPUT "Enter a number between 100 and 1000"\n04     INPUT Number\n05     WHILE Number <= 99 AND Number >= 1001\n06         OUTPUT "This is incorrect, please try again"\n07         INPUT Number\n08     ENDWHILE\n09     Num[80] ← Number\n10     IF Number > 500\n11       THEN\n12         Count ← Count + 1\n13     ENDIF\n14 UNTIL Index = 80\n15 OUTPUT Index\n16 OUTPUT " numbers were larger than 500"', keywords: [['OR','AND','line 5','condition','OR'],['Num[Index]','Index','80','line 9','array'],['NEXT','UNTIL','line 14','FOR','NEXT Index'],['Count','Index','line 15','OUTPUT Count']], anyOf: 4 }
      ]},
      { num: 7, topic: 'Logic Expression & Circuit', parts: [
        { label: 'a', marks: 6, type: 'long', question: 'Draw a logic circuit for the given truth table. X is 1 only when A=1 and B=0 and C=0, OR when A=1 and B=1 and C=1. Each gate max 2 inputs, do not simplify.\n\nTruth table shows X=1 for A=1,B=0,C=0 and A=1,B=1,C=1.', keywords: [['NOT','inverter','B','C'],['AND','AND gate','three inputs','combine'],['OR','OR gate','final output'],['A','B','C','inputs']], anyOf: 6 },
        { label: 'b', marks: 3, type: 'short', question: 'Write a logic expression for the given truth table. Do not simplify.\nX = 1 when (A=1,B=0,C=0) or (A=1,B=1,C=1).', keywords: [['A','AND','NOT B','AND','NOT C'],['OR'],['A','AND B','AND C']], anyOf: 3 }
      ]},
      { num: 8, topic: 'Flowchart Trace Table', parts: [
        { label: '', marks: 5, type: 'short', question: 'Trace a flowchart that inputs weights (kg) for loading a trailer. Items over 25kg are rejected. Trailer max 100kg.\nInput data: 13, 17, 26, 25, 5, 10, 15, 35, 20, 15\n\nWhat is the final TotalWeight and number of items Rejected?', keywords: [['85','TotalWeight','85 kg'],['2','Reject','rejected','2 items']], anyOf: 2 }
      ]},
      { num: 9, topic: 'Verification Checks', parts: [
        { label: '', marks: 1, type: 'mcq', question: 'Tick one box to show which check is a verification check on input data.', options: ['A: checksum', 'B: double entry check', 'C: echo check', 'D: parity check'], answer: 1 }
      ]},
      { num: 10, topic: 'String Functions', parts: [
        { label: 'a', marks: 5, type: 'short', question: 'Function LENGTH(X) finds the length of string X. Function SUBSTRING(X,Y,Z) finds substring of X starting at position Y, Z characters long.\n\nP ← "Computer Science"\nQ ← LENGTH(P)\nR ← SUBSTRING(P,10,7)\nS ← LENGTH(R)\nT ← SUBSTRING(R,1,3)\n\nGive the values of P, Q, R, S, T after each statement.', keywords: [['Computer Science','Computer Science','P'],['16','Q','length'],['Science','R','substring'],['7','S','length'],['Sci','T','substring']], anyOf: 5 },
        { label: 'b', marks: 2, type: 'short', question: 'Write a pseudocode statement to extract the word "Computer" from P and store it in variable F.', keywords: [['SUBSTRING','substring'],['P','1','8','F']], anyOf: 2 }
      ]},
      { num: 11, topic: 'Databases & SQL', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A database table PERFORMANCE stores theatre performances.\nState the number of fields and records.', keywords: [['5','five'],['8','eight']], anyOf: 2 },
        { label: 'b', marks: 2, type: 'short', question: 'Give two validation checks that could be performed on the ShowNumber field.', keywords: [['length check','length'],['type check','type'],['presence check','presence'],['format check','format']], anyOf: 2 },
        { label: 'c', marks: 2, type: 'short', question: 'Show the output from this SQL statement:\nSELECT Date, Title FROM PERFORMANCE WHERE NOT SoldOut AND Type = "Jazz";', keywords: [['03 Nov','Acoustic Evening','03 Nov Acoustic Evening']], anyOf: 1 }
      ]},
      { num: 12, topic: 'Loop Conversion', parts: [
        { label: 'a', marks: 4, type: 'short', question: 'Rewrite this FOR loop algorithm using a WHILE…DO…ENDWHILE loop:\n\nB ← FALSE\nINPUT Num\nFOR Counter ← 1 TO 12\n  IF A[Counter] = Num\n    THEN\n      B ← TRUE\n  ENDIF\nNEXT Counter', keywords: [['Counter','1','initialise','before loop'],['WHILE','<=','12','DO'],['IF','A[Counter]','Num','THEN','B'],['Counter','+','1','increment','inside loop','ENDWHILE']], anyOf: 4 },
        { label: 'b', marks: 1, type: 'short', question: 'Identify the purpose of the algorithm in part (a).', keywords: [['linear search','search','find','look for']], anyOf: 1 },
        { label: 'c', marks: 3, type: 'short', question: 'Explain the difference between a WHILE…DO…ENDWHILE and a REPEAT…UNTIL loop.', keywords: [['pre-condition','start','beginning','first','WHILE'],['may never run','might not execute','zero','condition false at start'],['post-condition','end','after','REPEAT','UNTIL'],['always at least once','always runs','minimum one']], anyOf: 3 }
      ]},
      { num: 13, topic: 'Programming Task — Patient Monitoring', parts: [
        { label: '', marks: 15, type: 'long', question: 'Write a procedure CheckPatient that takes a hospital number as parameter. Uses Patient[] (1D) and Readings[,] (2D) arrays.\n\nTemperature range: 31.6 to 37.2 inclusive\nPulse range: 55.0 to 100.0 inclusive\nHospital number: 1 to 1000 inclusive\n\nRequirements:\n1. Validate the hospital number (output error if invalid)\n2. If valid: output patient name\n3. Output "Normal readings" if both readings in range\n4. Output "Warning" and reading name if one reading out of range\n5. Output "Severe warning" and both reading names if both out of range\n\nUse pseudocode or program code with comments.', keywords: [['PROCEDURE','procedure','parameter','HospitalNumber'],['IF','valid','>=','1','<=','1000','check'],['temperature','pulse','Reading','range','between'],['Normal','normal readings','both','within range'],['Warning','out of range','one','temperature','pulse'],['Severe warning','severe','both','out of range'],['OUTPUT','output','name','message']], anyOf: 8 }
      ]}
    ]
  },

  // ========== Y7 MATHS TOPIC PAPERS ==========

  'maths_y7_fractions': {
    id: 'maths_y7_fractions',
    code: 'Y7/MATH',
    paper: 'Topic 1',
    name: 'Fractions',
    description: 'Equivalent fractions, simplifying, mixed numbers, adding, subtracting, multiplying, and dividing fractions.',
    type: 'past',
    session: 'Year 7',
    duration: 20,
    totalMarks: 22,
    subject: 'Maths',
    questions: [
      { num: 1, topic: 'Equivalent Fractions', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Write two fractions that are equivalent to 3/4.', keywords: [['6/8'],['9/12'],['12/16'],['15/20']], anyOf: 2 },
        { label: 'b', marks: 1, type: 'mcq', question: 'Which of these is NOT equivalent to 2/5?', options: ['4/10', '6/15', '8/25', '10/25'], answer: 2 },
        { label: 'c', marks: 1, type: 'short', question: 'Simplify 12/18 to its simplest form.', keywords: [['2/3'],['two thirds'],['two-thirds']], anyOf: 1 }
      ]},
      { num: 2, topic: 'Mixed Numbers', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Convert 11/4 to a mixed number.', keywords: [['2'],['3/4','three quarters','three-quarters']], anyOf: 2 },
        { label: 'b', marks: 2, type: 'short', question: 'Convert 2 3/5 to an improper fraction.', keywords: [['13/5']], anyOf: 1 }
      ]},
      { num: 3, topic: 'Adding and Subtracting', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Work out 2/7 + 3/7.', keywords: [['5/7']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Work out 2/3 + 1/4. Give your answer as a mixed number.', keywords: [['11/12'],['eleven twelfths','eleven-twelfths']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Work out 3 1/2 − 1 2/3.', keywords: [['1'],['5/6','five sixths','five-sixths']], anyOf: 2 }
      ]},
      { num: 4, topic: 'Multiplying Fractions', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Work out 2/5 × 3.', keywords: [['6/5','1 1/5','1.2']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Work out 3/4 × 2/5. Give your answer in simplest form.', keywords: [['3/10','6/20']], anyOf: 1 }
      ]},
      { num: 5, topic: 'Dividing Fractions', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Work out 4 ÷ 1/2.', keywords: [['8']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Work out 2/3 ÷ 5. Give your answer in simplest form.', keywords: [['2/15']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Work out 3/8 of 64.', keywords: [['24']], anyOf: 1 }
      ]}
    ]
  },

  'maths_y7_algebra': {
    id: 'maths_y7_algebra',
    code: 'Y7/MATH',
    paper: 'Topic 2',
    name: 'Algebraic Expressions',
    description: 'Simplifying expressions, collecting like terms, substitution, forming expressions, and expanding single brackets.',
    type: 'past',
    session: 'Year 7',
    duration: 20,
    totalMarks: 20,
    subject: 'Maths',
    questions: [
      { num: 1, topic: 'Simplifying Expressions', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Simplify fully: 5a + 3b − 2a + 7b.', keywords: [['3a','10b','3a+10b','3a + 10b']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'short', question: 'Simplify: x × x × x.', keywords: [['x cubed','x^3','x³']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Simplify: 4p × 3q.', keywords: [['12pq','12 pq']], anyOf: 1 }
      ]},
      { num: 2, topic: 'Substitution', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'If a = 3 and b = 5, find the value of 2a + b.', keywords: [['11']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'If x = 4, find the value of x² + 3x.', keywords: [['28']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'If m = 6 and n = −2, find the value of 3m − 2n.', keywords: [['22']], anyOf: 1 }
      ]},
      { num: 3, topic: 'Forming Expressions', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A rectangle has length (x + 3) cm and width 5 cm. Write an expression for its perimeter. Simplify your answer.', keywords: [['2x','16','2x+16','2x + 16']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'short', question: 'I think of a number, multiply it by 4, then add 7. Write this as an algebra expression using the letter n.', keywords: [['4n+7','4n + 7','4n plus 7']], anyOf: 1 }
      ]},
      { num: 4, topic: 'Expanding Brackets', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Expand: 3(x + 5).', keywords: [['3x+15','3x + 15']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Expand and simplify: 2(a + 4) + 3(a − 1).', keywords: [['5a+5','5a + 5']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'mcq', question: 'Expand 5(2y − 3). Which is correct?', options: ['10y − 15', '10y + 15', '7y − 8', '10y − 3'], answer: 0 }
      ]}
    ]
  },

  'maths_y7_numbertheory': {
    id: 'maths_y7_numbertheory',
    code: 'Y7/MATH',
    paper: 'Topic 3',
    name: 'Number Theory',
    description: 'Multiples, factors, prime numbers, prime factorisation, highest common factor, lowest common multiple, and divisibility rules.',
    type: 'past',
    session: 'Year 7',
    duration: 20,
    totalMarks: 22,
    subject: 'Maths',
    questions: [
      { num: 1, topic: 'Multiples and Factors', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'List the first four multiples of 7.', keywords: [['7','14','21','28']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'List all the factors of 24.', keywords: [['1','2','3','4','6','8','12','24']], anyOf: 1 }
      ]},
      { num: 2, topic: 'Prime Numbers', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Explain why 1 is not a prime number.', keywords: [['exactly','only','2','two','factors','one factor'],['itself','one']], anyOf: 2 },
        { label: 'b', marks: 1, type: 'short', question: 'What is the only even prime number?', keywords: [['2','two']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Express 36 as a product of its prime factors. Use index notation.', keywords: [['2²','2^2','2 squared','2 to the power','2 to the 2','2 × 2','2x2','2 squared'],['3²','3^2','3 squared','3 to the power','3 to the 2','3 × 3','3x3']], anyOf: 2 }
      ]},
      { num: 3, topic: 'HCF and LCM', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Find the highest common factor (HCF) of 18 and 30.', keywords: [['6']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Find the lowest common multiple (LCM) of 8 and 12.', keywords: [['24']], anyOf: 1 }
      ]},
      { num: 4, topic: 'Divisibility Rules', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'State the divisibility rule for 3.', keywords: [['sum','add','total'],['digits','digit','numbers'],['divisible','multiple','divided','3','three']], anyOf: 2 },
        { label: 'b', marks: 2, type: 'short', question: 'The number 5A2 is divisible by 3. Find the two possible values of the digit A.', keywords: [['2','5','8']], anyOf: 2 },
        { label: 'c', marks: 2, type: 'mcq', question: 'Which of these numbers is divisible by both 3 and 5?', options: ['145', '270', '352', '415'], answer: 1 }
      ]},
      { num: 5, topic: 'Problem Solving with HCF/LCM', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Two buses leave the station at 8am. Bus A returns every 12 minutes. Bus B returns every 18 minutes. At what time will both buses next be at the station together?', keywords: [['8:36','8.36','36','thirty-six','thirty six']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'A baker has 42 chocolate biscuits and 28 plain biscuits. She wants to make identical packs with the maximum number of biscuits in each. How many biscuits will be in each pack?', keywords: [['14','fourteen']], anyOf: 1 }
      ]}
    ]
  },

  'maths_y7_transformations': {
    id: 'maths_y7_transformations',
    code: 'Y7/MATH',
    paper: 'Topic 4',
    name: 'Transformations',
    description: 'Translation, reflection, rotation, and symmetry on a coordinate grid.',
    type: 'past',
    session: 'Year 7',
    duration: 20,
    totalMarks: 20,
    subject: 'Maths',
    questions: [
      { num: 1, topic: 'Translation', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A point (3, 5) is translated by vector (−2, 4). What are the coordinates of the image?', keywords: [['(1','9','1,9','1, 9']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Describe fully the translation that maps point A(4, −1) to point A′(7, 2). Use vector notation.', keywords: [['3','3'],['vector','translation']], anyOf: 2 }
      ]},
      { num: 2, topic: 'Reflection', parts: [
        { label: 'a', marks: 1, type: 'mcq', question: 'A shape is reflected in the y-axis. What happens to the point (5, 2)?', options: ['(−5, 2)', '(5, −2)', '(2, 5)', '(−5, −2)'], answer: 0 },
        { label: 'b', marks: 2, type: 'short', question: 'A point (3, −4) is reflected in the x-axis. Write the coordinates of its image.', keywords: [['(3','4','3,4','3, 4']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'What is the equation of the mirror line that reflects (1, 5) to (5, 5)?', keywords: [['x','3','x = 3','x=3']], anyOf: 1 }
      ]},
      { num: 3, topic: 'Rotation', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A point (2, 3) is rotated 90° clockwise about the origin. What are the coordinates of its image?', keywords: [['(3','-2','(3,-2)','3, -2','3,-2']], anyOf: 1 },
        { label: 'b', marks: 3, type: 'short', question: 'Describe fully the rotation that maps shape P to shape Q: shape P has vertex (1, 1) and shape Q has vertex (−1, 1). Mention the centre, direction, and angle.', keywords: [['origin','(0,0)','0,0'],['90','90°','90 degrees','ninety'],['clockwise','anti-clockwise','anticlockwise','counter-clockwise','counterclockwise']], anyOf: 3 }
      ]},
      { num: 4, topic: 'Symmetry', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'How many lines of symmetry does an equilateral triangle have?', keywords: [['3','three']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'What is the order of rotational symmetry of a square?', keywords: [['4','four']], anyOf: 1 },
        { label: 'c', marks: 1, type: 'mcq', question: 'Which of these shapes has exactly one line of symmetry?', options: ['Square', 'Rectangle (not a square)', 'Isosceles triangle', 'Parallelogram'], answer: 2 }
      ]},
      { num: 5, topic: 'Combined Transformations', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A shape is translated by vector (3, −2) and then reflected in the x-axis. A point on the shape starts at (2, 5). Find its final coordinates.', keywords: [['(5','-3','(5,-3)','5, -3','5,-3']], anyOf: 1 }
      ]}
    ]
  },

  'maths_y7_rounding': {
    id: 'maths_y7_rounding',
    code: 'Y7/MATH',
    paper: 'Topic 5',
    name: 'Rounding and Approximation',
    description: 'Rounding to decimal places, significant figures, nearest 10/100/1000, and estimation.',
    type: 'past',
    session: 'Year 7',
    duration: 20,
    totalMarks: 20,
    subject: 'Maths',
    questions: [
      { num: 1, topic: 'Rounding to Nearest 10, 100, 1000', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Round 347 to the nearest 10.', keywords: [['350']], anyOf: 1 },
        { label: 'b', marks: 1, type: 'short', question: 'Round 2847 to the nearest 100.', keywords: [['2800']], anyOf: 1 },
        { label: 'c', marks: 1, type: 'short', question: 'Round 7621 to the nearest 1000.', keywords: [['8000']], anyOf: 1 }
      ]},
      { num: 2, topic: 'Decimal Places', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Round 3.14159 to 2 decimal places.', keywords: [['3.14']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Round 7.486 to 1 decimal place.', keywords: [['7.5']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Round 0.095 to 2 decimal places.', keywords: [['0.10','0.1']], anyOf: 1 }
      ]},
      { num: 3, topic: 'Significant Figures', parts: [
        { label: 'a', marks: 1, type: 'short', question: 'Round 4628 to 1 significant figure.', keywords: [['5000']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Round 0.00582 to 1 significant figure.', keywords: [['0.006']], anyOf: 1 },
        { label: 'c', marks: 2, type: 'short', question: 'Round 37.49 to 2 significant figures.', keywords: [['37']], anyOf: 1 }
      ]},
      { num: 4, topic: 'Estimation', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'Estimate the value of 48 × 31 by rounding each number to 1 significant figure first.', keywords: [['50','30','1500']], anyOf: 1 },
        { label: 'b', marks: 2, type: 'short', question: 'Estimate 612 ÷ 19 by rounding each number to 1 significant figure first.', keywords: [['600','20','30']], anyOf: 1 }
      ]},
      { num: 5, topic: 'Upper and Lower Bounds', parts: [
        { label: 'a', marks: 2, type: 'short', question: 'A number is rounded to 6.3 to 1 decimal place. Write down the lower and upper bounds of the original number.', keywords: [['6.25','6.35']], anyOf: 1 }
      ]}
    ]
  }
};
