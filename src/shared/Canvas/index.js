import { useEffect, useRef, useState } from "react";
import "./mapRoutePage.css";
import { BoxRectangle } from "./rectangleClass";
import PIN_START from "../../assets/location-pin-green.png";
import PIN_END from "../../assets/location-pin-red.png";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuAppBar from "../../shared/Headers/MenuAppBar";

  const MODE = {
    read: "read",
    write: "write",
  };


export const CemeteryCanvas = ({ mapBackground }) => {

  const [boxes, setBoxes] = useState([]);
  const [list, setList] = useState([]);
  const [canvasHeight, setCanvasHeight] = useState(1000);
  const [canvasWidth, setCanvasWidth] = useState(1500);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [activated, setActivated] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [posDown, setPosDown] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);
  const [redPin, setRedPin] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const [puntod, setPuntod] = useState([{ x: 560, y: 365, w: 10, h: 10 }]);
  const [base64Data, setBase64Data] = useState({
    entrancePos: { x: 470, y: 800, h: 13, w: 13 },
    destination: { x: 470, y: 800, h: 13, w: 13 },
    route: [
      { x: 470, y: 800, h: 5, w: 5 },
      { x: 472.5, y: 800, w: 5, h: 5 },
      { x: 472.5, y: 799, w: 5, h: 5 },
      { x: 472.5, y: 797, w: 5, h: 5 },
      { x: 472.5, y: 793, w: 5, h: 5 },
      { x: 473.5, y: 792, w: 5, h: 5 },
      { x: 473.5, y: 790, w: 5, h: 5 },
      { x: 474.5, y: 789, w: 5, h: 5 },
      { x: 474.5, y: 788, w: 5, h: 5 },
      { x: 474.5, y: 788, w: 5, h: 5 },
      { x: 474.5, y: 786, w: 5, h: 5 },
      { x: 474.5, y: 785, w: 5, h: 5 },
      { x: 475.5, y: 785, w: 5, h: 5 },
      { x: 475.5, y: 784, w: 5, h: 5 },
      { x: 475.5, y: 783, w: 5, h: 5 },
      { x: 475.5, y: 781, w: 5, h: 5 },
      { x: 475.5, y: 781, w: 5, h: 5 },
      { x: 475.5, y: 780, w: 5, h: 5 },
      { x: 475.5, y: 779, w: 5, h: 5 },
      { x: 475.5, y: 778, w: 5, h: 5 },
      { x: 475.5, y: 777, w: 5, h: 5 },
      { x: 475.5, y: 776, w: 5, h: 5 },
      { x: 476.5, y: 775, w: 5, h: 5 },
      { x: 476.5, y: 774, w: 5, h: 5 },
      { x: 476.5, y: 773, w: 5, h: 5 },
      { x: 476.5, y: 772, w: 5, h: 5 },
      { x: 476.5, y: 772, w: 5, h: 5 },
      { x: 476.5, y: 771, w: 5, h: 5 },
      { x: 476.5, y: 771, w: 5, h: 5 },
      { x: 476.5, y: 770, w: 5, h: 5 },
      { x: 476.5, y: 770, w: 5, h: 5 },
      { x: 476.5, y: 769, w: 5, h: 5 },
      { x: 476.5, y: 768, w: 5, h: 5 },
      { x: 476.5, y: 767, w: 5, h: 5 },
      { x: 476.5, y: 765, w: 5, h: 5 },
      { x: 476.5, y: 764, w: 5, h: 5 },
      { x: 476.5, y: 763, w: 5, h: 5 },
      { x: 476.5, y: 761, w: 5, h: 5 },
      { x: 477.5, y: 760, w: 5, h: 5 },
      { x: 477.5, y: 758, w: 5, h: 5 },
      { x: 477.5, y: 757, w: 5, h: 5 },
      { x: 477.5, y: 756, w: 5, h: 5 },
      { x: 477.5, y: 755, w: 5, h: 5 },
      { x: 477.5, y: 754, w: 5, h: 5 },
      { x: 477.5, y: 753, w: 5, h: 5 },
      { x: 477.5, y: 753, w: 5, h: 5 },
      { x: 477.5, y: 752, w: 5, h: 5 },
      { x: 477.5, y: 752, w: 5, h: 5 },
      { x: 477.5, y: 751, w: 5, h: 5 },
      { x: 477.5, y: 750, w: 5, h: 5 },
      { x: 477.5, y: 749, w: 5, h: 5 },
      { x: 477.5, y: 749, w: 5, h: 5 },
      { x: 477.5, y: 748, w: 5, h: 5 },
      { x: 477.5, y: 748, w: 5, h: 5 },
      { x: 477.5, y: 747, w: 5, h: 5 },
      { x: 477.5, y: 746, w: 5, h: 5 },
      { x: 478.5, y: 746, w: 5, h: 5 },
      { x: 478.5, y: 744, w: 5, h: 5 },
      { x: 478.5, y: 744, w: 5, h: 5 },
      { x: 478.5, y: 743, w: 5, h: 5 },
      { x: 478.5, y: 742, w: 5, h: 5 },
      { x: 478.5, y: 741, w: 5, h: 5 },
      { x: 478.5, y: 740, w: 5, h: 5 },
      { x: 479.5, y: 740, w: 5, h: 5 },
      { x: 479.5, y: 739, w: 5, h: 5 },
      { x: 479.5, y: 738, w: 5, h: 5 },
      { x: 479.5, y: 737, w: 5, h: 5 },
      { x: 479.5, y: 736, w: 5, h: 5 },
      { x: 479.5, y: 735, w: 5, h: 5 },
      { x: 479.5, y: 735, w: 5, h: 5 },
      { x: 479.5, y: 734, w: 5, h: 5 },
      { x: 480.5, y: 733, w: 5, h: 5 },
      { x: 480.5, y: 732, w: 5, h: 5 },
      { x: 480.5, y: 732, w: 5, h: 5 },
      { x: 480.5, y: 731, w: 5, h: 5 },
      { x: 480.5, y: 731, w: 5, h: 5 },
      { x: 480.5, y: 730, w: 5, h: 5 },
      { x: 480.5, y: 729, w: 5, h: 5 },
      { x: 480.5, y: 728, w: 5, h: 5 },
      { x: 480.5, y: 727, w: 5, h: 5 },
      { x: 480.5, y: 726, w: 5, h: 5 },
      { x: 480.5, y: 725, w: 5, h: 5 },
      { x: 480.5, y: 725, w: 5, h: 5 },
      { x: 480.5, y: 724, w: 5, h: 5 },
      { x: 480.5, y: 723, w: 5, h: 5 },
      { x: 480.5, y: 721, w: 5, h: 5 },
      { x: 480.5, y: 721, w: 5, h: 5 },
      { x: 480.5, y: 720, w: 5, h: 5 },
      { x: 480.5, y: 719, w: 5, h: 5 },
      { x: 480.5, y: 718, w: 5, h: 5 },
      { x: 480.5, y: 717, w: 5, h: 5 },
      { x: 480.5, y: 716, w: 5, h: 5 },
      { x: 480.5, y: 715, w: 5, h: 5 },
      { x: 480.5, y: 713, w: 5, h: 5 },
      { x: 480.5, y: 712, w: 5, h: 5 },
      { x: 480.5, y: 712, w: 5, h: 5 },
      { x: 480.5, y: 711, w: 5, h: 5 },
      { x: 480.5, y: 710, w: 5, h: 5 },
      { x: 480.5, y: 710, w: 5, h: 5 },
      { x: 480.5, y: 709, w: 5, h: 5 },
      { x: 480.5, y: 708, w: 5, h: 5 },
      { x: 480.5, y: 707, w: 5, h: 5 },
      { x: 480.5, y: 706, w: 5, h: 5 },
      { x: 480.5, y: 705, w: 5, h: 5 },
      { x: 480.5, y: 704, w: 5, h: 5 },
      { x: 480.5, y: 703, w: 5, h: 5 },
      { x: 480.5, y: 702, w: 5, h: 5 },
      { x: 480.5, y: 701, w: 5, h: 5 },
      { x: 480.5, y: 699, w: 5, h: 5 },
      { x: 481.5, y: 698, w: 5, h: 5 },
      { x: 481.5, y: 697, w: 5, h: 5 },
      { x: 481.5, y: 695, w: 5, h: 5 },
      { x: 481.5, y: 694, w: 5, h: 5 },
      { x: 481.5, y: 692, w: 5, h: 5 },
      { x: 481.5, y: 692, w: 5, h: 5 },
      { x: 482.5, y: 691, w: 5, h: 5 },
      { x: 482.5, y: 690, w: 5, h: 5 },
      { x: 482.5, y: 690, w: 5, h: 5 },
      { x: 482.5, y: 689, w: 5, h: 5 },
      { x: 482.5, y: 688, w: 5, h: 5 },
      { x: 482.5, y: 685, w: 5, h: 5 },
      { x: 483.5, y: 684, w: 5, h: 5 },
      { x: 483.5, y: 681, w: 5, h: 5 },
      { x: 484.5, y: 681, w: 5, h: 5 },
      { x: 484.5, y: 680, w: 5, h: 5 },
      { x: 484.5, y: 679, w: 5, h: 5 },
      { x: 485.5, y: 678, w: 5, h: 5 },
      { x: 486.5, y: 677, w: 5, h: 5 },
      { x: 486.5, y: 676, w: 5, h: 5 },
      { x: 487.5, y: 676, w: 5, h: 5 },
      { x: 487.5, y: 675, w: 5, h: 5 },
      { x: 488.5, y: 675, w: 5, h: 5 },
      { x: 489.5, y: 673, w: 5, h: 5 },
      { x: 489.5, y: 673, w: 5, h: 5 },
      { x: 490.5, y: 672, w: 5, h: 5 },
      { x: 491.5, y: 672, w: 5, h: 5 },
      { x: 491.5, y: 671, w: 5, h: 5 },
      { x: 492.5, y: 671, w: 5, h: 5 },
      { x: 493.5, y: 671, w: 5, h: 5 },
      { x: 495.5, y: 670, w: 5, h: 5 },
      { x: 496.5, y: 669, w: 5, h: 5 },
      { x: 497.5, y: 669, w: 5, h: 5 },
      { x: 500.5, y: 668, w: 5, h: 5 },
      { x: 501.5, y: 667, w: 5, h: 5 },
      { x: 503.5, y: 667, w: 5, h: 5 },
      { x: 504.5, y: 666, w: 5, h: 5 },
      { x: 505.5, y: 666, w: 5, h: 5 },
      { x: 507.5, y: 665, w: 5, h: 5 },
      { x: 509.5, y: 664, w: 5, h: 5 },
      { x: 511.5, y: 663, w: 5, h: 5 },
      { x: 513.5, y: 663, w: 5, h: 5 },
      { x: 515.5, y: 662, w: 5, h: 5 },
      { x: 516.5, y: 661, w: 5, h: 5 },
      { x: 518.5, y: 660, w: 5, h: 5 },
      { x: 522.5, y: 658, w: 5, h: 5 },
      { x: 523.5, y: 658, w: 5, h: 5 },
      { x: 525.5, y: 657, w: 5, h: 5 },
      { x: 527.5, y: 656, w: 5, h: 5 },
      { x: 528.5, y: 655, w: 5, h: 5 },
      { x: 530.5, y: 654, w: 5, h: 5 },
      { x: 533.5, y: 653, w: 5, h: 5 },
      { x: 534.5, y: 652, w: 5, h: 5 },
      { x: 535.5, y: 651, w: 5, h: 5 },
      { x: 536.5, y: 651, w: 5, h: 5 },
      { x: 538.5, y: 651, w: 5, h: 5 },
      { x: 539.5, y: 651, w: 5, h: 5 },
      { x: 541.5, y: 651, w: 5, h: 5 },
      { x: 541.5, y: 651, w: 5, h: 5 },
      { x: 545.5, y: 649, w: 5, h: 5 },
      { x: 549.5, y: 647, w: 5, h: 5 },
      { x: 554.5, y: 646, w: 5, h: 5 },
      { x: 556.5, y: 645, w: 5, h: 5 },
      { x: 561.5, y: 643, w: 5, h: 5 },
      { x: 562.5, y: 642, w: 5, h: 5 },
      { x: 567.5, y: 640, w: 5, h: 5 },
      { x: 569.5, y: 639, w: 5, h: 5 },
      { x: 571.5, y: 637, w: 5, h: 5 },
      { x: 573.5, y: 636, w: 5, h: 5 },
      { x: 577.5, y: 634, w: 5, h: 5 },
      { x: 579.5, y: 633, w: 5, h: 5 },
      { x: 580.5, y: 632, w: 5, h: 5 },
      { x: 582.5, y: 631, w: 5, h: 5 },
      { x: 583.5, y: 630, w: 5, h: 5 },
      { x: 584.5, y: 630, w: 5, h: 5 },
      { x: 585.5, y: 628, w: 5, h: 5 },
      { x: 586.5, y: 628, w: 5, h: 5 },
      { x: 586.5, y: 627, w: 5, h: 5 },
      { x: 586.5, y: 627, w: 5, h: 5 },
      { x: 586.5, y: 627, w: 5, h: 5 },
      { x: 587.5, y: 624, w: 5, h: 5 },
      { x: 589.5, y: 618, w: 5, h: 5 },
      { x: 593.5, y: 612, w: 5, h: 5 },
      { x: 594.5, y: 610, w: 5, h: 5 },
      { x: 595.5, y: 608, w: 5, h: 5 },
      { x: 597.5, y: 605, w: 5, h: 5 },
      { x: 598.5, y: 602, w: 5, h: 5 },
      { x: 599.5, y: 600, w: 5, h: 5 },
      { x: 600.5, y: 599, w: 5, h: 5 },
      { x: 601.5, y: 597, w: 5, h: 5 },
      { x: 601.5, y: 596, w: 5, h: 5 },
      { x: 602.5, y: 592, w: 5, h: 5 },
      { x: 603.5, y: 591, w: 5, h: 5 },
      { x: 603.5, y: 590, w: 5, h: 5 },
      { x: 603.5, y: 588, w: 5, h: 5 },
      { x: 603.5, y: 587, w: 5, h: 5 },
      { x: 603.5, y: 585, w: 5, h: 5 },
      { x: 603.5, y: 584, w: 5, h: 5 },
      { x: 603.5, y: 583, w: 5, h: 5 },
      { x: 602.5, y: 580, w: 5, h: 5 },
      { x: 602.5, y: 579, w: 5, h: 5 },
      { x: 602.5, y: 576, w: 5, h: 5 },
      { x: 602.5, y: 571, w: 5, h: 5 },
      { x: 602.5, y: 567, w: 5, h: 5 },
      { x: 603.5, y: 557, w: 5, h: 5 },
      { x: 604.5, y: 554, w: 5, h: 5 },
      { x: 604.5, y: 550, w: 5, h: 5 },
      { x: 605.5, y: 544, w: 5, h: 5 },
      { x: 605.5, y: 542, w: 5, h: 5 },
      { x: 605.5, y: 540, w: 5, h: 5 },
      { x: 605.5, y: 538, w: 5, h: 5 },
      { x: 605.5, y: 536, w: 5, h: 5 },
      { x: 606.5, y: 533, w: 5, h: 5 },
      { x: 606.5, y: 532, w: 5, h: 5 },
      { x: 607.5, y: 530, w: 5, h: 5 },
      { x: 607.5, y: 529, w: 5, h: 5 },
      { x: 607.5, y: 528, w: 5, h: 5 },
      { x: 608.5, y: 527, w: 5, h: 5 },
      { x: 609.5, y: 524, w: 5, h: 5 },
      { x: 609.5, y: 523, w: 5, h: 5 },
      { x: 609.5, y: 523, w: 5, h: 5 },
      { x: 609.5, y: 522, w: 5, h: 5 },
      { x: 610.5, y: 520, w: 5, h: 5 },
      { x: 610.5, y: 519, w: 5, h: 5 },
      { x: 610.5, y: 517, w: 5, h: 5 },
      { x: 611.5, y: 516, w: 5, h: 5 },
      { x: 612.5, y: 513, w: 5, h: 5 },
      { x: 613.5, y: 511, w: 5, h: 5 },
      { x: 616.5, y: 507, w: 5, h: 5 },
      { x: 618.5, y: 505, w: 5, h: 5 },
      { x: 620.5, y: 502, w: 5, h: 5 },
      { x: 622.5, y: 499, w: 5, h: 5 },
      { x: 627.5, y: 494, w: 5, h: 5 },
      { x: 629.5, y: 492, w: 5, h: 5 },
      { x: 631.5, y: 490, w: 5, h: 5 },
      { x: 632.5, y: 488, w: 5, h: 5 },
      { x: 634.5, y: 487, w: 5, h: 5 },
      { x: 638.5, y: 487, w: 5, h: 5 },
      { x: 640.5, y: 486, w: 5, h: 5 },
      { x: 646.5, y: 485, w: 5, h: 5 },
      { x: 657.5, y: 482, w: 5, h: 5 },
      { x: 662.5, y: 481, w: 5, h: 5 },
      { x: 674.5, y: 479, w: 5, h: 5 },
      { x: 679.5, y: 478, w: 5, h: 5 },
      { x: 684.5, y: 478, w: 5, h: 5 },
      { x: 690.5, y: 478, w: 5, h: 5 },
      { x: 695.5, y: 478, w: 5, h: 5 },
      { x: 702.5, y: 478, w: 5, h: 5 },
      { x: 705.5, y: 478, w: 5, h: 5 },
      { x: 708.5, y: 478, w: 5, h: 5 },
      { x: 709.5, y: 478, w: 5, h: 5 },
      { x: 711.5, y: 479, w: 5, h: 5 },
      { x: 712.5, y: 480, w: 5, h: 5 },
      { x: 713.5, y: 480, w: 5, h: 5 },
      { x: 716.5, y: 479, w: 5, h: 5 },
      { x: 725.5, y: 476, w: 5, h: 5 },
      { x: 736.5, y: 472, w: 5, h: 5 },
      { x: 743.5, y: 469, w: 5, h: 5 },
      { x: 757.5, y: 465, w: 5, h: 5 },
      { x: 763.5, y: 464, w: 5, h: 5 },
      { x: 773.5, y: 464, w: 5, h: 5 },
      { x: 776.5, y: 464, w: 5, h: 5 },
      { x: 778.5, y: 465, w: 5, h: 5 },
      { x: 780.5, y: 466, w: 5, h: 5 },
      { x: 781.5, y: 468, w: 5, h: 5 },
      { x: 782.5, y: 469, w: 5, h: 5 },
      { x: 785.5, y: 470, w: 5, h: 5 },
      { x: 787.5, y: 470, w: 5, h: 5 },
      { x: 797.5, y: 470, w: 5, h: 5 },
      { x: 801.5, y: 470, w: 5, h: 5 },
      { x: 804.5, y: 470, w: 5, h: 5 },
      { x: 808.5, y: 469, w: 5, h: 5 },
      { x: 814.5, y: 469, w: 5, h: 5 },
      { x: 817.5, y: 469, w: 5, h: 5 },
      { x: 819.5, y: 469, w: 5, h: 5 },
      { x: 821.5, y: 469, w: 5, h: 5 },
      { x: 823.5, y: 469, w: 5, h: 5 },
      { x: 823.5, y: 469, w: 5, h: 5 },
      { x: 824.5, y: 469, w: 5, h: 5 },
      { x: 824.5, y: 469, w: 5, h: 5 },
      { x: 825.5, y: 470, w: 5, h: 5 },
      { x: 826.5, y: 470, w: 5, h: 5 },
      { x: 826.5, y: 470, w: 5, h: 5 },
      { x: 827.5, y: 470, w: 5, h: 5 },
      { x: 828.5, y: 470, w: 5, h: 5 },
      { x: 828.5, y: 470, w: 5, h: 5 },
      { x: 829.5, y: 470, w: 5, h: 5 },
      { x: 829.5, y: 470, w: 5, h: 5 },
      { x: 831.5, y: 470, w: 5, h: 5 },
      { x: 832.5, y: 469, w: 5, h: 5 },
      { x: 832.5, y: 469, w: 5, h: 5 },
      { x: 833.5, y: 469, w: 5, h: 5 },
      { x: 833.5, y: 469, w: 5, h: 5 },
      { x: 833.5, y: 468, w: 5, h: 5 },
      { x: 834.5, y: 468, w: 5, h: 5 },
      { x: 834.5, y: 468, w: 5, h: 5 },
      { x: 834.5, y: 468, w: 5, h: 5 },
      { x: 834.5, y: 468, w: 5, h: 5 },
      { x: 834.5, y: 467, w: 5, h: 5 },
      { x: 835.5, y: 467, w: 5, h: 5 },
      { x: 835.5, y: 467, w: 5, h: 5 },
      { x: 835.5, y: 467, w: 5, h: 5 },
      { x: 835.5, y: 467, w: 5, h: 5 },
      { x: 835.5, y: 467, w: 5, h: 5 },
      { x: 836.5, y: 467, w: 5, h: 5 },
      { x: 836.5, y: 467, w: 5, h: 5 },
      { x: 836.5, y: 467, w: 5, h: 5 },
      { x: 836.5, y: 466, w: 5, h: 5 },
      { x: 837.5, y: 466, w: 5, h: 5 },
      { x: 837.5, y: 466, w: 5, h: 5 },
      { x: 838.5, y: 466, w: 5, h: 5 },
      { x: 838.5, y: 466, w: 5, h: 5 },
      { x: 839.5, y: 466, w: 5, h: 5 },
      { x: 839.5, y: 466, w: 5, h: 5 },
      { x: 839.5, y: 466, w: 5, h: 5 },
      { x: 840.5, y: 466, w: 5, h: 5 },
      { x: 840.5, y: 466, w: 5, h: 5 },
    ],
  });
  const [mode, setMode] = useState(MODE.read);

  useEffect(() => {
    console.log("base64Data", base64Data);
  }, [base64Data]);

  const onDragging = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  const drawThis = (x, y) => {
    const clickBox = new BoxRectangle(
      "",
      contextRef.current,
      "red",
      x,
      y,
      13,
      13
    );
    const item = getCollision(clickBox);
    console.log("item----->>", item);
    if (item !== undefined) {
      const newList = list;
      const exist = newList.find((elem) => elem?.getId() === item?.getId());
      console.log("exist", exist);

      if (!exist) {
        const newRect = new BoxRectangle(
          item?.getId(),
          contextRef.current,
          "red",
          item?.getX(),
          item?.getY(),
          item?.getW(),
          item?.getH()
        );
        newList.push(newRect);
        setList([...newList]);
      }
    }
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsMouseDown(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosDown({ x, y });
    console.log("mouseDown", { x, y });
  };

  const onMouseUp = (e) => {
    setIsMouseDown(false);
    setActivated(false);
  };

  const getCollision = (box) => {
    for (let i = 0; i < boxes.length; i++) {
      const hasCollide = boxes[i].collision(box);
      if (hasCollide) return boxes[i];
    }
    return null;
  };

  const createGridTiles = () => {
    const context = contextRef.current;
    context.beginPath();
    for (let i = 5; i <= canvasWidth; i = i + 6) {
      context.moveTo(i, 5);
      context.lineTo(i, canvasHeight);

      context.moveTo(5, i);
      context.lineTo(canvasWidth, i);

      context.lineWidth = 0.25;
      context.strokeStyle = "red";
      context.stroke();
    }
  };

  const drawLines = () => {
    const tempBoxes = [];
    for (let a = 5; a < canvasHeight; a = a + 6) {
      for (let b = 5; b < canvasWidth; b = b + 6) {
        const box = new BoxRectangle(
          `${a}${b}`,
          contextRef.current,
          "transparent",
          b,
          a,
          5.4,
          5.4
        );
        box.draw();
        tempBoxes.push(box);
      }
    }
    setBoxes([...tempBoxes]);
  };

  const onClearCanvas = () => {
    const canvas = canvasRef.current;
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const oResetCanvas = () => {
    setList([]);
    setPos({ x: 329, y: 663 });
    setPosDown({ x: 329, y: 663 });
    setLocked(false);
    setActivated(false);
    setIsMouseDown(false);
    onClearCanvas();
    updateCanvas();
    redPin.update(329, 663);
    redPin.draw();
  };

  const updateCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      // const greenPin = new Image(20, 20);
      // greenPin.src = PIN_START;
      // greenPin.onload = () => {
      //   contextRef.current.drawImage(greenPin, 470, 800, 25, 30);
      // };

      if (showGrid) {
        createGridTiles();
      }

      drawLines();

    if (mode == MODE.write) 
      if (isMouseDown && !locked && activated) {
          drawThis(pos.x, pos.y);
          setBase64Data({
            ...base64Data,
            ...{
              route: [
                ...base64Data.route,
                ...[{ x: pos.x, y: pos.y, w: 5, h: 5 }],
              ],
            },
          });
        }
      

      base64Data?.route.map((item) => {
        drawThis(item.x, item.y);
      });

      puntod.map((item, index) => {
        const i = new BoxRectangle(
          `puntod-${index}`,
          contextRef.current,
          "purple",
          item.x,
          item.y,
          item.w,
          item.h
        );
        if (i.collision(redPin) && locked == false) {
          console.log("lock is true");
          setLocked(true);
        }
        i.draw();
      });

      list.map((item) => {
        item.draw();
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const context = canvas.getContext("2d");
      context.lineCap = "round";
      context.stokeStyle = "black";
      context.lineWidth = 5;
      contextRef.current = context;

      const redPin = new BoxRectangle(
        "pinStart",
        contextRef.current,
        "red",
        base64Data.entrancePos.x,
        base64Data.entrancePos.y,
        base64Data.entrancePos.w,
        base64Data.entrancePos.h
      );
       drawThis(base64Data.entrancePos.x, base64Data.entrancePos.y);
      setRedPin(redPin);
      updateCanvas();
    }

    const mouseEventDown = canvasRef.current.addEventListener(
      "mousedown",
      onMouseDown
    );
    const mouseEventUp = canvasRef.current.addEventListener(
      "mouseup",
      onMouseUp
    );
    const mouseEventDrag = canvasRef.current.addEventListener(
      "mousemove",
      onDragging
    );

    return () => {
      if (mouseEventDown && mouseEventUp && mouseEventDrag) {
        canvasRef.current.removeEventListener("mousedown", onMouseDown);
        canvasRef.current.removeEventListener("mouseup", onMouseUp);
        canvasRef.current.removeEventListener("mousemove", onDragging);
      }
    };
  }, [canvasRef.current]);

  useEffect(() => {
    if (activated && isMouseDown) {
      onClearCanvas();
      updateCanvas();
    }
  }, [pos]);

  useEffect(() => {
    if (!locked)
      if (
        posDown.x + 10 >= redPin?.getX() &&
        redPin?.getX() + redPin?.getW() >= posDown.x &&
        posDown.y + 10 >= redPin?.getY() &&
        redPin?.getY() + redPin?.getH() >= posDown.y
      ) {
        console.log("collision ----->> ");
        setActivated(true);
      } else {
        setActivated(false);
      }
  }, [posDown, redPin, activated]);

  const enableGrid = (event) => {
    onClearCanvas();
    setShowGrid(event.target.checked);
    updateCanvas();
  };

  return (
    <>
      <MenuAppBar title={"Map View"} />
      <Grid container justifyContent={"center"}>
        <Box>
          <img src={mapBackground} width={canvasWidth} height={canvasHeight} />
        </Box>

        <Box sx={{ position: "absolute" }}>
          <canvas className="canvas-container-bar-char" ref={canvasRef} />
        </Box>
      </Grid>

      {JSON.stringify(base64Data)}
    </>
  );
};
